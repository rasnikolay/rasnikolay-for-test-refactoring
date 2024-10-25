class AdditionalProfileInfo {
  private profilePicture: string;
  private bio: string;
  private interests: string[];

  constructor(
    profilePicture: string,
    bio: string,
    interests: string[]
  ) {
    this.profilePicture = profilePicture;
    this.bio = bio;
    this.interests = interests;
  }
}
class ProfileUser {
  private role: string;
  private isActive: boolean;
  private isVerified: boolean;
  private isPremium: boolean;
  private lastLogin: Date;
  private registrationDate: Date;


  constructor(
    role: string,
    isActive: boolean,
    isVerified: boolean,
    isPremium: boolean,
    lastLogin: Date,
    registrationDate: Date,

  ) {
    this.role = role;
    this.isActive = isActive;
    this.isVerified = isVerified;
    this.isPremium = isPremium;
    this.lastLogin = lastLogin;
    this.registrationDate = registrationDate;
  }
}

class User {
  private name: string;
  private age: number;
  private address: string;
  private phoneNumber: string;
  private email: string;
  constructor(
    name: string,
    age: number,
    address: string,
    phoneNumber: string,
    email: string,
  ) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }

  // ... (other methods)
}

/* Плохо: переизбыток всего в одном месте, можно разделить на отдельные классы
*  Улучшено: декомпозировано на несколько классов
* */

