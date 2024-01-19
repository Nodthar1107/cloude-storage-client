import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getApplicationLocale } from '../../entities/ApplicationLang/helper';
import { IUserOptions } from '../../entities/UserOptions/structures/IUserOptions';
import { PrivateAPI } from '../../shared/api';
import { ApplicationLang } from '../../entities/ApplicationLang/ApplicationLang';

const initialState: IUserOptions = {
    theme: '',
    lang: getApplicationLocale(),
    loading: 'succeed'
};

const userOptionsSlice = createSlice({
    name: 'userOptions',
    initialState: initialState,
    reducers: {
        setTheme(state: IUserOptions, action: PayloadAction<string>) {
            state.theme = action.payload;
        },
        setLang(state: IUserOptions, action: PayloadAction<ApplicationLang>) {
            state.lang = action.payload
        }
    }
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchStorageTheme.fulfilled, (state: IUserOptions, action: PayloadAction<string>) => {
    //             state.loading = 'succeed';
    //             state.theme = action.payload;
    //         })
    //         .addCase(fetchStorageTheme.pending, (state: IUserOptions) => {
    //             state.loading = 'panding';
    //         })
    //         .addCase(fetchStorageTheme.rejected, (state: IUserOptions) => {
    //             state.loading = 'fail';
    //         })
    // }
});

export const { setTheme, setLang } = userOptionsSlice.actions;
export const userOptionsReducer = userOptionsSlice.reducer;
