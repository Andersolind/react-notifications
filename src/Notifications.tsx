import React, { useState, useEffect } from "react";
import { getNotifications } from "./utils/notifications.api";

export type INotification = {
  id: number;
  timestamp: number;
  body: string;
  type: string;
};

const NotificationList: React.FC = () => {
  const [notifications, setNotifications] = useState<INotification[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const removeNotification = (id: number) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((note) => note.id !== id)
    );
  };
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await getNotifications();

        const sortedNotifications:any= response.data.sort(
          (a:any, b:any) => b.timestamp - a.timestamp
        );

        setNotifications(sortedNotifications);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  if (loading) {
    return <div>Loading notifications...</div>;
  }

  return (
    <div>
      {notifications.length > 0 ? (
        notifications.map((notification) => (
          <div
            className={`notification-button text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show ${notification.type}`}
            key={notification.id}
            id="snackbar"
          >
            {" "}
            <label
              onClick={() => {
                removeNotification(notification.id);
              }}
              className="close"
            ></label>
            <strong>{notification.body}</strong>
            <span>
              Time:
              {new Date(notification.timestamp).toLocaleString()}
            </span>
          </div>
        ))
      ) : (
        <p>No notifications available</p>
      )}
    </div>
  );
};

export default NotificationList;
