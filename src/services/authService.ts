import $api from "@/http";
import { AuthResponse } from "@/models/response/AuthResponse";
import { AxiosResponse } from "axios";

export default class AuthService {
  static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/login', {email, password})
  }
  static async register(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/register', {email, password})
  }
  static async logout(): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/logout')
  }
}