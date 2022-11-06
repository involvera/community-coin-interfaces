import ONCHAIN from './onchain'
import { TByte } from './general'

namespace OFFCHAIN {
    
    export interface IUnSerializedPut {
        time: number
        kind: TByte
        lh: number
        tx_id: string
        put_idx: number
        link: ONCHAIN.ILink
        pubkh: ONCHAIN.IPubKH
        value: ONCHAIN.IValue
        extra_data: string
        alias?: IAuthor
    }

    export interface IAuthor {
        address: string
        pp: string | null,
        username: string
    }

    export interface IProposal {
        sid: number
        content_link?: ONCHAIN.IKindLinkUnRaw
        layer?: string
        vote: ONCHAIN.IVoteSummary
        index: number
        created_at: Date
        public_key_hashed?: string
        title: string,
        content?: string[]
        author: IAuthor
        pubkh_origin?: string
        user_vote?: IUserVote | null
    }

    export interface IPreviewThread2 {
        pkh: string
        author: IAuthor
        created_at: Date
        target: IPreviewThread2 | IPreviewProposal2 | null
        title: string
        content: string
        sid: number
        spname: string
    }
      
    export interface IPreviewProposal2 {
        index: number
        layer: ONCHAIN.TProposalType
        author: IAuthor
        created_at: Date
        vote: ONCHAIN.IVoteSummary
        title: string
        sid: number
        spname: string
    }

    export interface IPreviewProposal1 {
        preview_code: string
        user_vote: IUserVote
        vote: ONCHAIN.IVoteSummary
    }

    export interface IPreviewThread1 {
        preview_code: string
        content_link: ONCHAIN.IKindLinkUnRaw
        reward: ONCHAIN.IThreadReward
        reply_count: number
    }

    export interface IUserVote {
        has_approved: boolean
        vote_time: number
    }

    export interface IConstitutionData {
        proposal: IProposal
        constitution: ONCHAIN.IConstitutionRule[]
    }

    export interface ISocietyStats {
        version: TByte
        last_height: number
        total_contributor: number
        total_proposal: number
        active_addresses: number
        most_active_addresses: IAuthor[]
        circulating_supply: string
        circulating_vp_supply: string
        last_thread_cost_change: ONCHAIN.ICostHistory
        last_proposal_cost_change: ONCHAIN.ICostHistory
    }

    export interface IContributorStats {
        content_nonce: number
        balance: number
        vote_power_count: number
        rewards_received_270: number
        position: number
        addr: string
        sid: number
    }

    export interface ISociety {
        id: number
        name: string
        path_name: string
        created_at: Date
        currency_symbol: string
        description: string
        domain: string,
        currency_route_api: string
        pp: null
        stats: ISocietyStats
        costs: ONCHAIN.ICostProposal
        constitution: IConstitutionData
    }
    
    export interface IThreadTargetGroup {
        sid: number
        author: IAuthor
        public_key_hashed: string
        title: string
        content: string
        created_at: Date        
        content_link: ONCHAIN.IKindLinkUnRaw
        target?: IThreadTargetGroup | IPreviewProposal2 | null
    }

    export interface IThreadViewGroup {
        sid: number
        author: IAuthor
        public_key_hashed: string
        title: string
        content: string
        created_at: Date        
        content_link: ONCHAIN.IKindLinkUnRaw
        reply_count: number
        reward: ONCHAIN.IThreadReward
        target?: IThreadTargetGroup
    }

    export interface IThread {
        sid: number
        content_link?: ONCHAIN.IKindLinkUnRaw
        author?: IAuthor
        reply_count: number
        title: string
        content: string
        public_key_hashed: string
        reward?: ONCHAIN.IThreadReward
        embeds?: string[]
        created_at?: Date
        target?: IThread | IProposal | null
    }

    export interface IUser {
        alias: IAuthor
        info: ONCHAIN.IWalletInfo
    }
}

export default OFFCHAIN