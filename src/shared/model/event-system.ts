type EventCallback = (data: any) => void;

interface Events {
    [eventName: string]: EventCallback[];
}

export const eventSystem = {
	events: {} as Events,
	publish(eventName: string, data: any) {
		if (!this.events[eventName]) return;
		this.events[eventName].forEach(callback => callback(data));
	},
	subscribe(eventName: string, callback: EventCallback) {
		if (!this.events[eventName]) {
			this.events[eventName] = [];
		}
		this.events[eventName].push(callback);
	},
	unsubscribe(eventName: string, callback: EventCallback) {
		if (!this.events[eventName]) return;
		this.events[eventName] = this.events[eventName].filter(cb => cb !== callback);
	},
};
