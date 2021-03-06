///<reference path="AchievementRequirement.ts"/>

class QuestRequirement extends AchievementRequirement {
    constructor(value: number, option: GameConstants.AchievementOption = GameConstants.AchievementOption.more) {
        super(value, option, GameConstants.AchievementType['Quest']);
    }

    public getProgress() {
        return Math.min(App.game.statistics.questsCompleted(), this.requiredValue);
    }

    public hint(): string {
        return `${this.requiredValue} Quests need to be completed.`;
    }
}
