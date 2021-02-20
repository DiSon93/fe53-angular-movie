import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import {
  SigninParams,
  SigninResult,
  SignupParams,
  SignupResult,
} from '../model/auth.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
// không thể sử dụng 1 property làm  biến toàn cục vì component không thể theo dõi sự thay đổi của biến này

currentUser = new BehaviorSubject<SigninResult | null> (null);
// currentUser.next(value) => gán giá trị mới cho biến currentUser
  // currentUser.value => lấy giá trị của biến currentUser tại thời điểm hiện tại
  // currentUser.asObservalbe => Chuyển currentUser thành 1 Observable => có thể subcrible sự thay đổi của biến này
  signin(values: SigninParams): Observable<SigninResult>{
    const url =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap';

    return this.http.post<SigninResult>(url, values);
  }

  signup(values: SignupParams): Observable<SignupResult> {
    const url = 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy';
    return this.http.post<SignupResult>(url, { ...values, maNhom: 'GP01' });
  }
  constructor(private http: HttpClient) {
    const user = localStorage.getItem('user');
    if(user){
      this.currentUser.next(JSON.parse(user));
    }
   }
}
