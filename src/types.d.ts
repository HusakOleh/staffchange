import { Dispatch, SetStateAction } from 'react';

type setStateType<T> = Dispatch<SetStateAction<T>>;
type fileType = File | null;
