import { Timestamp, sleep, randomNumber } from "./utils";

// Notification type definition
interface Notification {
  id: number;
  timestamp: Timestamp;
  body: string;
  type: "alert" | "info";
}

// Initial notifications
const initialNotifications: Notification[] = [
  {
    id: 4,
    timestamp: new Timestamp(),
    body: "Important! Please change your password.",
    type: "alert",
  },
  {
    id: 1,
    timestamp: new Timestamp(),
    body: "Welcome, here's some things to get you started.",
    type: "info",
  },
  {
    id: 3,
    timestamp: new Timestamp(),
    body: "RJ has sent you a message.",
    type: "info",
  },
  {
    id: 2,
    timestamp: new Timestamp(),
    body: "Upload your profile image.",
    type: "info",
  },
];

// Get notifications function
export const getNotifications = async (): Promise<{ data: Notification[]; meta: { total: number } }> => {
  const notifications = initialNotifications;

  await sleep(randomNumber(2)); // Simulate delay
  return {
    data: notifications,
    meta: { total: notifications.length },
  };
};

// Add notification function
export const addNotification = async (payload: Omit<Notification, "id">): Promise<{ data: Notification }> => {
  const notifications = initialNotifications;
  
  // Create new notification with a new ID
  const newNotification: Notification = { ...payload, id: notifications.length + 1, timestamp: new Timestamp() };

  notifications.push(newNotification);

  await sleep(randomNumber(2)); // Simulate delay
  return { data: newNotification };
};