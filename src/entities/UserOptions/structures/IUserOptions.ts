import { ApplicationLang } from '../../ApplicationLang/ApplicationLang';
import { IOperationState } from '../../store/IOperationState';

export interface IUserOptions extends IOperationState {
    theme: string;
    lang: ApplicationLang;
}
