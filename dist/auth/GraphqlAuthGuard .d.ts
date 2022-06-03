import { ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
declare const GraphqlAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class GraphqlAuthGuard extends GraphqlAuthGuard_base {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
export {};
