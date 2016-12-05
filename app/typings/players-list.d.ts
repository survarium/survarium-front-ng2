export interface PlayersList {
    data: {
        clan ?:{
            abbr :string,
            name ?:string
        },
        clan_meta ?:{
            abbr :string
        },
        nickname :string,
        id :string,
        progress :{
            elo :any,
            level :number,
            experience :number
        },
        total :{
            artefactKills :number,
            artefactUses :number,
            boxesBringed :number,
            dies :number,
            grenadeKills :number,
            headshots :number,
            kd :number,
            kills :number,
            matches :number,
            meleeKills :number,
            pointCaptures :number,
            score :number,
            scoreAvg :number,
            stats :number,
            victories :number,
            winRate :number,
        }
    }[],
    filtered ?:number,
    total :number,
    skip :number,
    limit :number
}
