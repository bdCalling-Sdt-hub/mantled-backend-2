import { PaymentModel } from '../../app/modules/payment_v2/model/payment.model';
import { subscriptionPackageModel } from '../../app/modules/subscription_packages/model/subscriptionPackages.model';

export const checkIsSubscribed = (userId: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      let isSubscribed = true; // Start assuming the user is subscribed
      const paymentData = await PaymentModel.find({
        userId: userId,
      });

      for (let i = 0; i < paymentData.length; i++) {
        const singleData = paymentData[i].toObject();
        const subscriptionData = await subscriptionPackageModel.findOne({
          id: singleData.packageId,
        });

        if (subscriptionData) {
          const startDate = new Date(singleData.createdAt); // Ensure it's a Date object
          const currentDate = new Date(); // Current date

          // Convert Date objects to timestamps (milliseconds)
          const startDateMillis = startDate.getTime();
          const currentDateMillis = currentDate.getTime();

          // Define the duration check logic
          let isSubscriptionExpired = false;

          if (subscriptionData.duration === 'weekly') {
            const oneWeekInMilliseconds = 7 * 24 * 60 * 60 * 1000; // 1 week in milliseconds
            if (currentDateMillis - startDateMillis >= oneWeekInMilliseconds) {
              console.log('Weekly subscription expired! One week has passed.');
              isSubscriptionExpired = true;
            }
          }

          if (subscriptionData.duration === 'monthly') {
            const oneMonthInMilliseconds = 30 * 24 * 60 * 60 * 1000; // 1 month in milliseconds (approx.)
            if (currentDateMillis - startDateMillis >= oneMonthInMilliseconds) {
              console.log(
                'Monthly subscription expired! One month has passed.'
              );
              isSubscriptionExpired = true;
            }
          }

          if (subscriptionData.duration === 'yearly') {
            const oneYearInMilliseconds = 365 * 24 * 60 * 60 * 1000; // 1 year in milliseconds (approx.)
            if (currentDateMillis - startDateMillis >= oneYearInMilliseconds) {
              console.log('Yearly subscription expired! One year has passed.');
              isSubscriptionExpired = true;
            }
          }

          // If the subscription has expired, mark isSubscribed as false
          if (isSubscriptionExpired) {
            isSubscribed = false;
          }
        }
      }

      if (isSubscribed) {
        console.log('User is still subscribed.');
      } else {
        console.log('User subscription has expired.');
      }

      resolve(isSubscribed);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};
