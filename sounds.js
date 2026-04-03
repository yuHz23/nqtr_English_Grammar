// ============================================
// WEB AUDIO API SOUND SYSTEM
// ============================================
class SoundManager {
    constructor() {
        this.ctx = null;
        this.enabled = true;
        this.volume = 0.4;
    }

    init() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
    }

    play(type) {
        if (!this.enabled) return;
        this.init();
        switch(type) {
            case 'correct': this._playCorrect(); break;
            case 'wrong': this._playWrong(); break;
            case 'click': this._playClick(); break;
            case 'complete': this._playComplete(); break;
            case 'achievement': this._playAchievement(); break;
            case 'streak': this._playStreak(); break;
            case 'tick': this._playTick(); break;
        }
    }

    _tone(freq, duration, type = 'sine', startTime = 0, gain = this.volume) {
        const osc = this.ctx.createOscillator();
        const g = this.ctx.createGain();
        osc.type = type;
        osc.frequency.value = freq;
        g.gain.setValueAtTime(gain, this.ctx.currentTime + startTime);
        g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + startTime + duration);
        osc.connect(g);
        g.connect(this.ctx.destination);
        osc.start(this.ctx.currentTime + startTime);
        osc.stop(this.ctx.currentTime + startTime + duration);
    }

    _playCorrect() {
        this._tone(523, 0.12, 'sine', 0, 0.3);
        this._tone(659, 0.12, 'sine', 0.08, 0.3);
        this._tone(784, 0.2, 'sine', 0.16, 0.3);
    }

    _playWrong() {
        this._tone(311, 0.15, 'sawtooth', 0, 0.15);
        this._tone(277, 0.25, 'sawtooth', 0.1, 0.15);
    }

    _playClick() {
        this._tone(800, 0.05, 'sine', 0, 0.15);
    }

    _playComplete() {
        [523, 587, 659, 698, 784, 880, 988, 1047].forEach((f, i) => {
            this._tone(f, 0.15, 'sine', i * 0.08, 0.2);
        });
    }

    _playAchievement() {
        this._tone(523, 0.15, 'sine', 0, 0.3);
        this._tone(659, 0.15, 'sine', 0.12, 0.3);
        this._tone(784, 0.15, 'sine', 0.24, 0.3);
        this._tone(1047, 0.3, 'triangle', 0.36, 0.3);
    }

    _playStreak() {
        this._tone(698, 0.1, 'sine', 0, 0.25);
        this._tone(880, 0.15, 'sine', 0.08, 0.25);
    }

    _playTick() {
        this._tone(1200, 0.03, 'square', 0, 0.08);
    }

    toggle() {
        this.enabled = !this.enabled;
        return this.enabled;
    }
}

const Sound = new SoundManager();
