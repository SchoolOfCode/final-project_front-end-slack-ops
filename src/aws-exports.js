/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile = {
    "aws_project_region": "eu-west-2",
    "aws_cognito_identity_pool_id": "eu-west-2:b75b7f34-7ff5-4f57-a000-5e7a7a5323bd",
    "aws_cognito_region": "eu-west-2",
    "aws_user_pools_id": "eu-west-2_NjCmQdmOC",
    "aws_user_pools_web_client_id": "4778hrf64gf8i027bffv8msgl6",
    "oauth": {
        "domain": "projectturnupauth-dev.auth.eu-west-2.amazoncognito.com",
        "scope": [
            "phone",
            "email",
            "openid",
            "profile",
            "aws.cognito.signin.user.admin"
        ],
        "redirectSignIn": "http://localhost:3000/explore/",
        "redirectSignOut": "http://localhost:3000/",
        "responseType": "code"
    },
    "federationTarget": "COGNITO_USER_POOLS",
    "aws_cognito_username_attributes": [
        "EMAIL"
    ],
    "aws_cognito_social_providers": [],
    "aws_cognito_signup_attributes": [
        "EMAIL"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [
        "SMS"
    ],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": []
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ]
};



export default awsmobile;

