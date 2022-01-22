const spacesUrl = "https://fu28m9tkob.execute-api.ap-south-1.amazonaws.com/prod/"
export const config = {
    REGION: 'ap-south-1',
    USER_POOL_ID: 'ap-south-1_b5HKA77a0',
    APP_CLIENT_ID: '6niodh8goqr8mctlj658si2r5',
    IDENTITY_POOL_ID:'ap-south-1:412f1076-27ae-4130-aa9b-521db382b7c5',
    SPACES_PHOTOS_BUCKET:"spaces-photos-0236d1a74488",
    PROFILE_PHOTOS_BUCKET:"profile-photos-0236d1a74488",
    api: {
        baseUrl: spacesUrl,
        spacesUrl: `${spacesUrl}spaces/`,
        reservationsUrl: `${spacesUrl}reservations/`
    }
}