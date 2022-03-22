import type { Principal } from '@dfinity/principal';
export type GenericValue = { 'Nat64Content' : bigint } |
  { 'Nat32Content' : number } |
  { 'BoolContent' : boolean } |
  { 'Nat8Content' : number } |
  { 'Int64Content' : bigint } |
  { 'IntContent' : bigint } |
  { 'NatContent' : bigint } |
  { 'Nat16Content' : number } |
  { 'Int32Content' : number } |
  { 'Int8Content' : number } |
  { 'Int16Content' : number } |
  { 'BlobContent' : Array<number> } |
  { 'NestedContent' : Vec } |
  { 'Principal' : Principal } |
  { 'TextContent' : string };
export interface InitArgs {
  'logo' : [] | [string],
  'name' : [] | [string],
  'custodians' : [] | [Array<Principal>],
  'symbol' : [] | [string],
}
export type ManualReply = { 'Ok' : bigint } |
  { 'Err' : NftError };
export type ManualReply_1 = { 'Ok' : boolean } |
  { 'Err' : NftError };
export interface ManualReply_2 {
  'logo' : [] | [string],
  'name' : [] | [string],
  'created_at' : bigint,
  'upgraded_at' : bigint,
  'custodians' : Array<Principal>,
  'symbol' : [] | [string],
}
export type ManualReply_3 = { 'Ok' : [] | [Principal] } |
  { 'Err' : NftError };
export type ManualReply_4 = { 'Ok' : Array<bigint> } |
  { 'Err' : NftError };
export type ManualReply_5 = { 'Ok' : Array<TokenMetadata> } |
  { 'Err' : NftError };
export type ManualReply_6 = { 'Ok' : TokenMetadata } |
  { 'Err' : NftError };
export type ManualReply_7 = { 'Ok' : TxEvent } |
  { 'Err' : NftError };
export type NftError = { 'SelfTransfer' : null } |
  { 'TokenNotFound' : null } |
  { 'TxNotFound' : null } |
  { 'SelfApprove' : null } |
  { 'OperatorNotFound' : null } |
  { 'Unauthorized' : null } |
  { 'ExistedNFT' : null } |
  { 'OwnerNotFound' : null } |
  { 'Other' : string };
export type SupportedInterface = { 'Mint' : null } |
  { 'Approval' : null } |
  { 'TransactionHistory' : null };
export interface TokenMetadata {
  'transferred_at' : [] | [bigint],
  'transferred_by' : [] | [Principal],
  'owner' : [] | [Principal],
  'operator' : [] | [Principal],
  'approved_at' : [] | [bigint],
  'approved_by' : [] | [Principal],
  'properties' : Array<[string, GenericValue]>,
  'is_burned' : boolean,
  'token_identifier' : bigint,
  'burned_at' : [] | [bigint],
  'burned_by' : [] | [Principal],
  'minted_at' : bigint,
  'minted_by' : Principal,
}
export interface TxEvent {
  'time' : bigint,
  'operation' : string,
  'details' : Array<[string, GenericValue]>,
  'caller' : Principal,
}
export type Vec = Array<
  [
    string,
    { 'Nat64Content' : bigint } |
      { 'Nat32Content' : number } |
      { 'BoolContent' : boolean } |
      { 'Nat8Content' : number } |
      { 'Int64Content' : bigint } |
      { 'IntContent' : bigint } |
      { 'NatContent' : bigint } |
      { 'Nat16Content' : number } |
      { 'Int32Content' : number } |
      { 'Int8Content' : number } |
      { 'Int16Content' : number } |
      { 'BlobContent' : Array<number> } |
      { 'NestedContent' : Vec } |
      { 'Principal' : Principal } |
      { 'TextContent' : string },
  ]
>;
export interface _SERVICE {
  'approve' : (arg_0: Principal, arg_1: bigint) => Promise<ManualReply>,
  'balanceOf' : (arg_0: Principal) => Promise<ManualReply>,
  'custodians' : () => Promise<Array<Principal>>,
  'isApprovedForAll' : (arg_0: Principal, arg_1: Principal) => Promise<
      ManualReply_1
    >,
  'logo' : () => Promise<[] | [string]>,
  'metadata' : () => Promise<ManualReply_2>,
  'mint' : (
      arg_0: Principal,
      arg_1: bigint,
      arg_2: Array<[string, GenericValue]>,
    ) => Promise<ManualReply>,
  'name' : () => Promise<[] | [string]>,
  'operatorOf' : (arg_0: bigint) => Promise<ManualReply_3>,
  'operatorTokenIdentifiers' : (arg_0: Principal) => Promise<ManualReply_4>,
  'operatorTokenMetadata' : (arg_0: Principal) => Promise<ManualReply_5>,
  'ownerOf' : (arg_0: bigint) => Promise<ManualReply_3>,
  'ownerTokenIdentifiers' : (arg_0: Principal) => Promise<ManualReply_4>,
  'ownerTokenMetadata' : (arg_0: Principal) => Promise<ManualReply_5>,
  'setApprovalForAll' : (arg_0: Principal, arg_1: boolean) => Promise<
      ManualReply
    >,
  'setCustodians' : (arg_0: Array<Principal>) => Promise<undefined>,
  'setLogo' : (arg_0: string) => Promise<undefined>,
  'setName' : (arg_0: string) => Promise<undefined>,
  'setSymbol' : (arg_0: string) => Promise<undefined>,
  'supportedInterfaces' : () => Promise<Array<SupportedInterface>>,
  'symbol' : () => Promise<[] | [string]>,
  'tokenMetadata' : (arg_0: bigint) => Promise<ManualReply_6>,
  'totalSupply' : () => Promise<bigint>,
  'totalTransactions' : () => Promise<bigint>,
  'transaction' : (arg_0: bigint) => Promise<ManualReply_7>,
  'transfer' : (arg_0: Principal, arg_1: bigint) => Promise<ManualReply>,
  'transferFrom' : (
      arg_0: Principal,
      arg_1: Principal,
      arg_2: bigint,
    ) => Promise<ManualReply>,
}
