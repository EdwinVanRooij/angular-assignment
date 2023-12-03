import { InjectionToken } from '@angular/core';

export interface CustomConfig {
	apiUrl: string;
	cacheDurationInSeconds: number;
}

export const CUSTOM_CONFIG: CustomConfig = {
	apiUrl: 'http://localhost:9000',
	cacheDurationInSeconds: 300,
};

// Example of defining a global singleton
export const CUSTOM_CONFIG_TOKEN = new InjectionToken<CustomConfig>('CUSTOM_CONFIG_TOKEN', {
	providedIn: 'root',
	factory: () => CUSTOM_CONFIG,
});
