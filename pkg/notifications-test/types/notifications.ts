/**
 * Type definitions for the Notification Center
 */

/**
 * Notification Level for a notification in the Notification Center
 */
export enum NotificationLevel {
  Announcement = 0, // eslint-disable-line no-unused-vars
  Task, // eslint-disable-line no-unused-vars
  Info, // eslint-disable-line no-unused-vars
  Success, // eslint-disable-line no-unused-vars
  Warning, // eslint-disable-line no-unused-vars
  Error, // eslint-disable-line no-unused-vars
}

/**
 * Type for Notification that is sent
 */
export type Notification = any;
