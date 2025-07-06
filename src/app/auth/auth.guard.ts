import { inject } from "@angular/core";
import { CanActivateFn, CanLoadFn, Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { MatDialog } from "@angular/material/dialog";

export const authGuard: CanActivateFn = () => {
    const authService = inject(AuthService);
    const router = inject(Router);
    const dialog = inject(MatDialog)

    if(authService.isLoggedIn) {return true; }
    
    return router.navigate(['/login']);
}