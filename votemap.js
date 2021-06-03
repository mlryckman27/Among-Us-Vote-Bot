class VoteMap {
    
    constructor() {
        this.skeld = 0;
        this.mirahq = 0;
        this.polus = 0;
        this.airship = 0;

        this.voteStatus = false;
    }

    // Getters return number of votes for specific map.

    /**
     * @returns {number}: number of votes for Skeld.
     */
    get skeldCount() {

        return this.skeld;
    }
    
    /**
     * @returns {number}: number of votes for MiraHQ.
     */
    get mirahqCount() {

        return this.mirahq;
    }

    /**
     * @returns {number}: number of votes for Polus.
     */
    get polusCount() {
        return this.polus;
    }

    /**
     * @returns {number}: number of votes for Airship.
     */
    get airshipCount() {
        return this.airship;
    }

    /**
     * @returns {boolean}: If true, voting is in progress; false, if voting not in progress.
     */
    get getVoteStatus() {
        return this.voteStatus;
    }


    
    // Setters assign a vote count to a specific map.

    /**
     * @param {number} {votes}: Number of votes to set for Skeld.
     */
    set setSkeldCount(votes) {
        this.skeld = votes;
    }

    /**
     * @param {number} {votes}: Number of votes to set for MiraHQ.
     */
    set setMirahqCount(votes) {
        this.mirahq = votes;
    }

    /**
     * @param {number} {votes}: Number of votes to set for Polus.
     */
    set setPolusCount(votes) {
        this.polus = votes;
    }

    /**
     * @param {number} {votes}: Number of votes to set for Airship.
     */
    set setAirshipCount(votes) {
        this.airship = votes;
    }

    /**
     * @param {boolean} {status}: true sets voteStatus; false unsets voteStatus.
     */
    set setVoteStatus(status) {
        this.voteStatus = status;
    }


    /**
     * @returns {boolean}: Set voteStatus to true to start the vote.
     */
    startVote() {
        this.setVoteStatus = true;
    }

    /**
     * Increment the vote count for Skeld by 1.
     */
    incSkeld() {
        this.skeld++;
    }

    /**
     * Increment the vote count for MiraHQ by 1.
     */
    incMirahq() {
        this.mirahq++;
    }

    /**
     * Increment the vote count for Polus by 1.
     */
    incPolus() {
        this.polus++;
    }

    /**
     * Increment the vote count for Airship by 1.
     */
    incAirship() {
        this.airship++;
    }

    /**
     * Reset the vote for all maps to zero.
     * This method is called whenever the results() 
     * method is called, so the vote can be reset
     * for next round.
     */
    clearVote() {
        this.setSkeldCount = 0;
        this.setMirahqCount = 0;
        this.setPolusCount = 0;
        this.setAirshipCount = 0;
    }

    /**
     * This method is called when voting is finished 
     * and votes need to be tallied.
     * @returns {string}: A string containing the final vote for each map.
     */
    results() {
        const result = 'Skeld: ' + this.skeldCount + '\n' + 'MiraHQ: ' + this.mirahqCount + '\n' + 'Polus: ' + this.polusCount + '\n' + 'Airship: ' + this.airshipCount + '\n';
        this.clearVote();
        this.setVoteStatus = false;
        return result;

    }

}

module.exports = VoteMap;