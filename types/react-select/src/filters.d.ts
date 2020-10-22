import { OptionTypeBase } from './types';

export interface Option<OptionType extends OptionTypeBase> {
    label: string;
    value: string;
    data: OptionType;
}

export interface Config<OptionType extends OptionTypeBase> {
    ignoreCase?: boolean;
    ignoreAccents?: boolean;
    stringify?: (obj: Option<OptionType>) => string;
    trim?: boolean;
    matchFrom?: 'any' | 'start';
}

export function createFilter<OptionType extends OptionTypeBase>(
    config: Config<OptionType> | null
): (option: Option<OptionType>, rawInput: string) => boolean;
