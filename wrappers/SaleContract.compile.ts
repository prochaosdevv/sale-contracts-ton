import { CompilerConfig } from '@ton/blueprint';

export const compile: CompilerConfig = {
    targets: ['stdlib.fc','ft/params.fc','ft/op-codes.fc','ft/jetton-utils.fc' , 'ft/sale-contract.fc'],
};
