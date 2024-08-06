export const eventSystem = {
	events: {},
	publish(eventName, data) {
		if (!this.events[eventName]) return;
		this.events[eventName].forEach(callback => callback(data));
	},
	subscribe(eventName, callback) {
		if (!this.events[eventName]) {
			this.events[eventName] = [];
		}
		this.events[eventName].push(callback);
	},
	unsubscribe(eventName, callback) {
		if (!this.events[eventName]) return;
		this.events[eventName] = this.events[eventName].filter(cb => cb !== callback);
	},
};
