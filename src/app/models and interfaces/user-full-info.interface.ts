export interface UserFullInfo {
  id: string | undefined,
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: string,
  country: string,
  city: string,
  street: string,
  appartmentNumber: null,
  buldingNumber: null,
  additionalInfo: string,
  isApproved: boolean,
  imageUrl: null,
  rents: [],
  passwordRecoveryTokens: [],
  messagesReceived: [],
  messagesSent: []
}
