/* 
This is just a wrapper to add functionality - all the data is stored in the passed in obj, and should look like:

{
    stageData: [] // each element represents the selection for the stage
    
}
*/
class GameState {
    constructor(obj) {
        Object.assign(this, obj)
    }

    makeSelection(data) { this.stageData.push(data) }
    // TODO: maybe support undo?

    get selectedMap() { return this.stageData[0] }
    get selectedMonster() { return this.stageData[4] }
    get selectedAssault() { return this.stageData[2]?.assault }
    get selectedSupport() { return this.stageData[2]?.support }
    get selectedTrapper() { return this.stageData[6]?.trapper }
    get selectedMedic() { return this.stageData[6]?.medic }

    get isMapSelect() { return this.stageData.length === 0 }
    get isAssaultBan() { return this.stageData.length === 1 }
    get isAssaultPick() { return this.stageData.length === 2 }
    get isMonsterBan() { return this.stageData.length === 3 }
    get isMonsterPick() { return this.stageData.length === 4 }
    get isMedicBan() { return this.stageData.length === 5 }
    get isMedicPick() { return this.stageData.length === 6 }

}

export {GameState}