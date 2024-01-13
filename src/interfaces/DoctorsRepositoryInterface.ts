export interface CreateDoctor {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone_number: string;
  gender: string;
}

export interface UpdateDoctor {
  first_name?: string;
  last_name?: string;
  email?: string;
  password?: string;
  phone_number?: string;
  gender?: string;
  is_verified?: boolean;
}

export interface Doctor {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone_number: string;
  gender: string;
  is_verified: boolean;
}

export interface GetUserTokenPayload {
  email: string;
  password: string;
}

export interface ReturnUserTokenPayload {
  token: string;
  email: string;
  role: string;
}

export interface DoctorsRepositoryInterface {
  findDoctors(): Promise<Doctor[]>;
  findDoctorByEmail(email: string): Promise<Doctor | null>;
  findDoctorById(id: number): Promise<Doctor | null>;
  findDoctorsByIds(ids: number[]): Promise<Doctor[] | null>;
  createDoctor(data: CreateDoctor): Promise<Doctor>;
  updateDoctor(id: number, data: UpdateDoctor): Promise<Doctor>;
  getDoctorToken(payload: GetUserTokenPayload): Promise<ReturnUserTokenPayload>;
  getSpecializationDoctors(id: number): Promise<Doctor[]>;
  getHospitalDoctors(id: number): Promise<Doctor[]>;
}
