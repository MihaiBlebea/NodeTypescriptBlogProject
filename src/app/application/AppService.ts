import { AppRequest } from './AppRequest'


export interface AppService
{
    execute(request : AppRequest) : any
}
