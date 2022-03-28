import { Buffer } from 'buffer'
export type TByte = 0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31|32|33|34|35|36|37|38|39|40|41|42|43|44|45|46|47|48|49|50|51|52|53|54|55|56|57|58|59|60|61|62|63|64|65|66|67|68|69|70|71|72|73|74|75|76|77|78|79|80|81|82|83|84|85|86|87|88|89|90|91|92|93|94|95|96|97|98|99|100|101|102|103|104|105|106|107|108|109|110|111|112|113|114|115|116|117|118|119|120|121|122|123|124|125|126|127|128|129|130|131|132|133|134|135|136|137|138|139|140|141|142|143|144|145|146|147|148|149|150|151|152|153|154|155|156|157|158|159|160|161|162|163|164|165|166|167|168|169|170|171|172|173|174|175|176|177|178|179|180|181|182|183|184|185|186|187|188|189|190|191|192|193|194|195|196|197|198|199|200|201|202|203|204|205|206|207|208|209|210|211|212|213|214|215|216|217|218|219|220|221|222|223|224|225|226|227|228|229|230|231|232|233|234|235|236|237|238|239|240|241|242|243|244|245|246|247|248|249|250|251|252|253|254|255
export type T_REWARD = 'upvote' | 'reward0' | 'reward1' | 'reward2'

export const UPVOTE_KEY = "upvote"
export const REWARD0_KEY = "reward0"
export const REWARD1_KEY = "reward1"
export const REWARD2_KEY = "reward2"

export interface IUserVote {
    has_approved: boolean
    vote_time: number
}

export interface IUserVoteProposal {
    pubkh: string
    user_vote: IUserVote
}

export interface IPubKH {
    sender: string
    recipient: string
}

export interface ILink {
    from: string
    to: string
}

export interface IValue {
    at_time: number
    now: number
}

export interface IUnSerializedPut {
    time: number
    kind: TByte
    lh: number
    tx_id: string
    put_idx: number
    link: ILink
    pubkh: IPubKH
    value: IValue
    extra_data: string
}

export interface IInputRaw {
    prev_transaction_hash: Buffer
    vout: Buffer
    script_sig: Buffer[]
}

export interface IInputUnRaw {
    prev_transaction_hash: string
    vout: number
    script_sig: string[]
}

export interface IOutputUnRaw {
    input_src_idxs: number[]
    value: number
    script: string[]
}

export interface IOutputRaw {
	input_src_idxs: Buffer[]
	value:        Buffer
	script:				Buffer[]
}

export interface IUTXOUnRaw {
    tx_id: string
    idx: number
    output: IOutputUnRaw
    mr: number
    cch: string
}

export interface IPKH_UTXOS {
    utxos: IUTXOUnRaw[]
    melted_value: number
}

export interface IFees {
    fee_per_byte: number
    address: number
}

export interface ICCHList{
    list: string[]
    last_height: number   
}

export interface IUserActivity {
    last_lugh_height: number
    activity: number[]
}

export interface IWalletInfo {
    content_nonce: number
    balance: number
    vote_power_count: number
    rewards_received_270: number
    position: number
    activity: IUserActivity 
}

export interface IContract {
    value: Uint8Array
    next_change: number
}

export interface ICostProposal { 
    thread: number
    proposal: number
    upvote: number
    reward0: number
    reward1: number
    reward2: number
}

export interface IScriptOrigin{
    tx_id: Buffer
    vout: number
}

export interface IScriptOriginUnRaw{
    tx_id: string
    vout: number
}

export interface IScriptProposal {
    origin: IScriptOrigin
    pubkh: Buffer
    content_nonce: number    
}

export interface IScriptProposalUnRaw {
    origin: IScriptOriginUnRaw
    pubkh: string
    content_nonce: number    
}

export interface IConstitutionRule {
    title: string
    content: string
}

export interface IConstitutionProposalUnRaw {
    proposal: IScriptProposalUnRaw
    constitution: IConstitutionRule[]
}

export interface IConstitutionProposal {
    proposal: IScriptProposal
    constitution: IConstitutionRule[]
}

export interface IWallet {
    contract: IContract
    info: IWalletInfo
    cch: ICCHList
    fees: IFees
    utxos: IUTXOUnRaw[]   
    costs: ICostProposal
    constitution: IConstitutionRule
}

export interface IRewardCount {
    n_upvote: number
    n_reward0: number
    n_reward1: number
    n_reward2: number
}

export interface IRewardCollectionPut {
    value: number
    recipient: string
    reward_count: IRewardCount
    last_at: number
}

export interface IVoteSummary {
    closed_at_lh: number
    approved: number
    declined: number
}

export interface IKindLinkUnRaw {
    tx_id:string
    lh: number
    vout: number
    output: IOutputUnRaw
    target_content: string
}

export interface IContentLink {
    rewards: IRewardCollectionPut
    vote: IVoteSummary
    index: number
    link: IKindLinkUnRaw
    pubkh_origin: string
    user_vote: IUserVote
}

export interface ITransactionUnRaw {
    lh: number
    t: number
    inputs: IInputUnRaw[]
    outputs: IOutputUnRaw[]
}

export interface ITransactionRaw {
    lh:      Buffer
	t:       Buffer
	inputs:  IInputRaw[]
	outputs: IOutputRaw[] 
}

export interface INewTXResp {
    transaction: ITransactionUnRaw
    utxos: IUTXOUnRaw[]
}

export interface IRewardLink {
    lugh_height: number
    tx_id: string
    vout: number
    output: IOutputUnRaw
    category: string
    pubkh_origin: string
}

export interface IProposalContext {
    lugh_height: number
    tx_height: number
    constitution: IConstitutionProposal
    costs: ICostProposal
}

export interface ICostHistory {
    proposal_index: number
    from_lh: number
    validated_at_time: number
    validated_at_tx_height: number
    thread_cost: number
    proposal_cost: number
}

export interface ISocietyStats {
    last_height: number
    total_contributor: number
    total_proposal: number
    active_addresses: number
    most_active_addresses: string[]
    circulating_supply: string
    circulating_vp_supply: string
    constitution: IConstitutionProposalUnRaw
    last_thread_cost_change: ICostHistory
    last_proposal_cost_change: ICostHistory
    costs: ICostProposal
}

export interface IRewardSummary {
    value: number
    reward_count: IRewardCount
    last_at: number
    thread_pkh: string
}

export interface IThreadReward {
    thread_pkh: string
    reward_count: IRewardCount
    user_reward_count: IRewardCount
}

export interface IHeaderSignature {
    pubkey: string
    signature: string
}