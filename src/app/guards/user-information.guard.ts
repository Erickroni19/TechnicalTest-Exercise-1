import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UsersService } from '../users/services/users.service';

export const userInformationGuard: CanActivateFn = (route, state) => {

  const usersService = inject(UsersService);
  const router = inject(Router);

  if(!usersService.user){

    router.navigate(['home'])

    return false;
  }

  return true;




};
