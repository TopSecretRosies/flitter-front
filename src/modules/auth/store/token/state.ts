export interface ITokenState {
    access_token: string | null;
    refresh_token: string | null;
    isLoading: boolean;
  }
  
  function state(): ITokenState {
    return {
      access_token: null,
      refresh_token: null,
      isLoading: false,
    };
  }
  
  export default state;