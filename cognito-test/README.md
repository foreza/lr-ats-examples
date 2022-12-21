# Account switch / Token generation

## Summary

- Leverage AWS Cognito (clientside) SDK to authenticate users with a provided pool
- Fill in the credentials yourself with your own info

## Workflow A - Logging in as a user

1. Call the AWS SDK method `authenticateUser` with the provided cognitoUser. Sample implementation of this method can be found in the HTML: `loginForUser`.  
    - Preferably also persist the cognitoUser created in before the `authenticateUser` call.
2. The `authenticateUser` returns JWT tokens (ID, access, refresh) in the `onSuccess` callback. Store whatever tokens you need to use.

## Worfklow B - Refreshing token as a user (requires A)

1. Call the AWS SDK method `refreshSession` with the provided cognitoUser, passing in a refresh token created from step A. Sample implementation of this method can be found in the HTML: `refreshUserWithToken`. 
2. You will receive a set of updated tokens. Store these tokens for later use.


## Workflow C - Account switching a user (leverages both A and B)

1. Ensure user is logged in (use workflow A). Verify the current account the user is on by inspecting the ID token.
2. After user is logged in, you can grab a list of accounts they can switch with by calling the console API lambda function. Don't pass any body. Endpoint is `https://api-prod.launch.liveramp.com/users/accounts`
```    
curl --location --request GET 'https://api-prod.launch.liveramp.com/users/accounts' \
--header 'Authorization: Bearer <ID_TOKEN_HERE>'
```
3. Call the same endpoint to utilize the lambda function for account switcher. Pass the target `publisherGroup` you plan to switch to as JSON, along with existing identity token. This should update user custom attributes to use the new publisher group.

> "Switching of account finished successfully!" is the response

```
curl 'https://api-prod.launch.liveramp.com/users/accounts' \
  -H 'authority: api-prod.launch.liveramp.com' \
  -H 'accept: application/json' \
  -H 'accept-language: en-US,en;q=0.9' \
  -H 'authorization: <ID_TOKEN_HERE>' \
  --data-raw '{"publisherGroup":"051db4d0-afbf-11ec-8504-7f2c151831b7"}' \
  --compressed
```
4. User attributes are now updated/account switch is done server side; we need to update the client to match. Using Workflow B, refresh the existing user by passing the refresh token from step 1 / workflow A. 
5. At this step, you can verify the account switch is complete by inspecting the updated ID JWT token.
