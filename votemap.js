class VoteMap {

    // TODO: add getters and setters using get/set keywords and implement the methods into the main index.js where needed
    
    constructor() {
        this.skeld = 0;
        this.mirahq = 0;
        this.polus = 0;
        this.airship = 0;

        this.voteStatus = false;
    }

    startVote() {
        this.voteStatus = true;
    }

    incSkeld() {
        this.skeld++;;
    }

    incMirahq() {
        this.mirahq++;
    }

    incPolus() {
        this.polus++;
    }

    incAirship() {
        this.airship++;
    }

    clearVote() {
        this.skeld = 0;
        this.mirahq = 0;
        this.polus = 0;
        this.airship = 0;
    }

    results() {
        const result = 'Skeld: ' + this.skeld + '\n' + 'MiraHQ: ' + this.mirahq + '\n' + 'Polus: ' + this.polus + '\n' + 'Airship: ' + this.airship + '\n';
        this.clearVote();
        this.voteStatus = false;
        return result;

    }
}

module.exports = VoteMap;