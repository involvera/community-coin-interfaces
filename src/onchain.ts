import {TByte} from './general'

namespace ONCHAIN {
    export type TProposalType = "COSTS" | "APPLICATION" | "CONSTITUTION"

    export interface IUserVote {
        has_approved: boolean
        vote_time: number
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
        prev_transaction_hash: Uint8Array
        vout: Uint8Array
        script_sig: Uint8Array[]
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
        input_src_idxs: Uint8Array[]
        value:        Uint8Array
        script:				Uint8Array[]
    }
    
    export interface IUTXOUnRaw {
        tx_id: string
        idx: number
        output: IOutputUnRaw
        mr: number
        lh: number
        tx?: null | ITransactionUnRaw
    }
    
    export interface IPKH_UTXOS {
        utxos: IUTXOUnRaw[]
        melted_value: number
    }
    
    export interface IFees {
        fee_per_byte: number
        address: number
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
    
    export interface ICostProposal { 
        thread: number
        proposal: number
        upvote: number
        reward0: number
        reward1: number
        reward2: number
    }
    
    export interface IScriptOrigin{
        tx_id: Uint8Array
        vout: number
    }
    
    export interface IScriptOriginUnRaw{
        tx_id: string
        vout: number
    }
    
    export interface IScriptProposal {
        origin: IScriptOrigin
        pubkh: Uint8Array
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
        info: IWalletInfo
        last_height: number
        fees: IFees
        utxos: IUTXOUnRaw[]   
        costs: ICostProposal
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
    }

    export interface IProposalLink {
        rewards: ONCHAIN.IRewardCollectionPut
        vote: ONCHAIN.IVoteSummary
        index: number
        link: ONCHAIN.IKindLinkUnRaw
        pubkh_origin: string
        user_vote: IUserVote
    }
    
    export interface ITransactionUnRaw {
        v?: TByte
        lh: number
        t: number
        inputs: IInputUnRaw[]
        outputs: IOutputUnRaw[]
    }
    
    export interface ITransactionRaw {
        v?: TByte
        lh:      Uint8Array
        t:       Uint8Array
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
        version: TByte
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
    
    export interface IThreadReward {
        thread_pkh: string
        reward_count: IRewardCount
        user_reward_count: IRewardCount
    }
    
    export interface IHeaderSignature {
        pubkey: string
        signature: string
    }
}

export default ONCHAIN