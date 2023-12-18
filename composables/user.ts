export const useUserForm = () => {
  const userField = useState<{
    email: string;
    fullName: string;
    fullAddress:string;
    phoneNumber:string;
    company: string;
    jobRole: string;
  }>('userField', () => ({
    email: '',
    fullName: '',
    fullAddress:'',
    phoneNumber:'',
    company:'',
    jobRole:'',
  }))
  return userField
}