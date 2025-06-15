const { PrismaClient: Prisma, Category, BankName } = require('../lib/generated/prisma');

const prisma = new Prisma();

async function main() {
  try {
    // First, clear existing data
    await prisma.cards.deleteMany({});
    console.log('Cleared existing data');

    const cards = [
      // Best Cards
      {
        category: Category.BEST,
        bankName: BankName.SBI,
        cardName: "Cashback SBI Credit Card",
        description: "The SBI Cashback Credit Card is a no-nonsense cashback card offering 5% cashback on most online transactions and 1% cashback on offline purchases and bill payments. Ideal for frequent online shoppers and food delivery users.",
        image: "https://cd9941cc.delivery.rocketcdn.me/wp-content/uploads/2022/09/Cashback-SBI-Credit-Card.webp",
        joiningFee: 999,
        renewalFee: 999,
        bestSuitedFor: "Shopping | Food",
        rewardType: "Cashback",
        welcomeBenefits: "N/A",
        starRating: 5.0
      },
      {
        category: Category.BEST,
        bankName: BankName.HDFC,
        cardName: "Swiggy HDFC Bank Credit Card",
        description: "Popular among millennials, the Swiggy HDFC Bank Credit Card offers 10% cashback on Swiggy, Dineout, and Instamart, and 5% cashback on Amazon, Flipkart, Ola, Myntra, and H&M. Mastercard World perks included.",
        image: "https://cd9941cc.delivery.rocketcdn.me/wp-content/uploads/2024/06/Swiggy-HDFC-Bank-Credit-Card.webp",
        joiningFee: 500,
        renewalFee: 500,
        bestSuitedFor: "Dining | Food",
        rewardType: "Cashback",
        welcomeBenefits: "Complimentary 3-Month Swiggy One Membership",
        starRating: 5.0
      },
      {
        category: Category.BEST,
        bankName: BankName.HDFC,
        cardName: "HDFC Bank Millennia Credit Card",
        description: "Ideal for online-savvy youth, the HDFC Millennia Credit Card offers 5% cashback on Amazon, Flipkart, Myntra, Swiggy, Zomato, cult.fit, and more. Cashback capped at ₹1,000 per statement cycle.",
        image: "https://cd9941cc.delivery.rocketcdn.me/wp-content/uploads/2021/09/HDFC-Bank-Millennia-Credit-Card.webp",
        joiningFee: 1000,
        renewalFee: 1000,
        bestSuitedFor: "Shopping",
        rewardType: "Cashback",
        welcomeBenefits: "1,000 CashPoints",
        starRating: 5.0
      },
      {
        category: Category.BEST,
        bankName: BankName.ICICI,
        cardName: "Amazon Pay ICICI Bank Credit Card",
        description: "The Amazon Pay ICICI Credit Card offers 5% cashback for Prime members and 3% for non-Prime on Amazon, 2% with Amazon Pay partners, and 1% elsewhere. Lifetime free with welcome benefits up to ₹2,500.",
        image: "https://cd9941cc.delivery.rocketcdn.me/wp-content/uploads/2021/06/Amazon-Pay-ICICI-Bank-Credit-Card-1.webp",
        joiningFee: 0,
        renewalFee: 0,
        bestSuitedFor: "Shopping",
        rewardType: "Cashback",
        welcomeBenefits: "Cashback and Discounts Up to ₹2,500 (Both for Prime and Non-Prime Members) and One Month EazyDiner Membership",
        starRating: 5.0
      },
      {
        category: Category.BEST,
        bankName: BankName.AXIS,
        cardName: "Flipkart Axis Bank Credit Card",
        description: "Earn 5% cashback on Flipkart and 4% on Swiggy, PVR, cult.fit, and Uber with the Flipkart Axis Credit Card. Comes with ₹600 welcome benefits and four complimentary domestic airport lounge accesses annually.",
        image: "https://cd9941cc.delivery.rocketcdn.me/wp-content/uploads/2021/08/Flipkart-Axis-Bank-Credit-Card.webp",
        joiningFee: 500,
        renewalFee: 500,
        bestSuitedFor: "Shopping",
        rewardType: "Cashback",
        welcomeBenefits: "Introductory Benefits Worth Rs. 600 on Card Issuance",
        starRating: 5.0
      },
      // Lifetime Free Cards
      {
        category: Category.LIFETIME_FREE,
        bankName: BankName.INDUSIND,
        cardName: "EazyDiner IndusInd Platinum Credit Card",
        description: "The EazyDiner IndusInd Platinum Credit Card is designed specifically for food and dining. It offers up to a 25% discount on dining expenditures via EazyDiner. Cardholders receive a 3-month EazyDiner Prime membership and 500 bonus EazyPoints as a welcome benefit.",
        image: "https://cd9941cc.delivery.rocketcdn.me/wp-content/uploads/2024/01/EazyDiner-IndusInd-Platinum-Credit-Card.webp",
        joiningFee: 0,
        renewalFee: 0,
        bestSuitedFor: "Food",
        rewardType: "Reward Points",
        welcomeBenefits: "3-Month EazyDiner Prime Membership and 500 Bonus EazyPoints",
        starRating: 4.0
      },
      {
        category: Category.LIFETIME_FREE,
        bankName: BankName.IDFC,
        cardName: "IDFC FIRST Select Credit Card",
        description: "The IDFC FIRST Select Credit Card is a premium offering with benefits across travel, shopping, entertainment, and more. It offers up to 10x reward points, complimentary lounge access, and lifetime free membership.",
        image: "https://cd9941cc.delivery.rocketcdn.me/wp-content/uploads/2021/08/IDFC-FIRST-Select-Credit-Card.webp",
        joiningFee: 0,
        renewalFee: 0,
        bestSuitedFor: "Shopping | Travel | Entertainment",
        rewardType: "Reward Points",
        welcomeBenefits: "N/A",
        starRating: 5.0
      },
      {
        category: Category.LIFETIME_FREE,
        bankName: BankName.AXIS,
        cardName: "Axis Bank Neo Credit Card",
        description: "The Axis Bank Neo Credit Card is a top lifetime-free option for millennials and first-time users. Benefits include discounts on Zomato, Myntra, Blinkit, and BookMyShow, and cashback on utilities. UPI linkage is available for RuPay users.",
        image: "https://cd9941cc.delivery.rocketcdn.me/wp-content/uploads/2021/08/Axis-Bank-Neo-Credit-Card.webp",
        joiningFee: 0,
        renewalFee: 0,
        bestSuitedFor: "Shopping | Food",
        rewardType: "Reward Points",
        welcomeBenefits: "100% Cashback Up to ₹300 on First Utility Bill Payment",
        starRating: 4.0
      },
      {
        category: Category.LIFETIME_FREE,
        bankName: BankName.INDUSIND,
        cardName: "IndusInd Legend Credit Card",
        description: "The IndusInd Legend Credit Card is a lifetime free card ideal for first-time applicants. It offers 1 reward point per ₹100 spent on weekdays and 2 on weekends, along with movie BOGO offers.",
        image: "https://cd9941cc.delivery.rocketcdn.me/wp-content/uploads/2021/07/IndusInd-Legend-Credit-Card.webp",
        joiningFee: 0,
        renewalFee: 0,
        bestSuitedFor: "Shopping",
        rewardType: "Reward Points",
        welcomeBenefits: "N/A",
        starRating: 4.0
      },
      {
        category: Category.LIFETIME_FREE,
        bankName: BankName.HSBC,
        cardName: "HSBC Visa Platinum Credit Card",
        description: "HSBC Visa Platinum is HSBC's only lifetime free card. Ideal for new users looking for no-fee entry-level cards with discounts and offers. Earn 2 Reward Points per ₹150 spent.",
        image: "https://cd9941cc.delivery.rocketcdn.me/wp-content/uploads/2021/08/HSBC-Visa-Platinum-Card.webp",
        joiningFee: 0,
        renewalFee: 0,
        bestSuitedFor: "Shopping",
        rewardType: "Reward Points",
        welcomeBenefits: "N/A",
        starRating: 4.0
      },
      {
        category: Category.LIFETIME_FREE,
        bankName: BankName.AU,
        cardName: "AU Bank LIT Credit Card",
        description: "AU Bank LIT is India's first customizable credit card. It lets you select benefits from five categories (travel, OTT, shopping, cashback, etc.) every 90 days. Offers accelerated reward points, 5% cashback, and complimentary lounge access.",
        image: "https://cd9941cc.delivery.rocketcdn.me/wp-content/uploads/2022/07/AU-Bank-LIT-Credit-Card.webp",
        joiningFee: 0,
        renewalFee: 0,
        bestSuitedFor: "Custom Benefits",
        rewardType: "Reward Points",
        welcomeBenefits: "Custom Features with Base Rewards",
        starRating: 4.0
      },
      // Travel Cards
      {
        category: Category.TRAVEL,
        bankName: BankName.AXIS,
        cardName: "Axis Bank Atlas Credit Card",
        description: "Travel-focused card with tiered EDGE Miles rewards, offering 5 EDGE Miles per ₹100 spent and extensive lounge access.",
        image: "https://cd9941cc.delivery.rocketcdn.me/wp-content/uploads/2022/02/Axis-Bank-Atlas-Credit-Card.webp",
        joiningFee: 5000,
        renewalFee: 5000,
        bestSuitedFor: "Travel",
        rewardType: "Reward Points",
        welcomeBenefits: "2,500 Edge Miles on completing 1 transaction within 30 days of card issuance",
        starRating: 4.0
      },
      {
        category: Category.TRAVEL,
        bankName: BankName.AMERICAN_EXPRESS,
        cardName: "American Express Platinum Travel Credit Card",
        description: "Premium travel card offering 10,000 Membership Rewards Points and lounge access with Priority Pass membership.",
        image: "https://cd9941cc.delivery.rocketcdn.me/wp-content/uploads/2021/06/American-Express-Platinum-Travel-Credit-Card.webp",
        joiningFee: 5000,
        renewalFee: 5000,
        bestSuitedFor: "Travel, Shopping",
        rewardType: "Reward Points",
        welcomeBenefits: "10,000 Membership Rewards Points",
        starRating: 5.0
      },
      {
        category: Category.TRAVEL,
        bankName: BankName.SBI,
        cardName: "SBI MILES PRIME Credit Card",
        description: "Mid-tier travel card with Travel Credits, lounge access, travel insurance, and Priority Pass membership.",
        image: "https://cd9941cc.delivery.rocketcdn.me/wp-content/uploads/2024/04/SBI-Card-MILES-PRIME.webp",
        joiningFee: 2999,
        renewalFee: 2999,
        bestSuitedFor: "Travel",
        rewardType: "Reward Points",
        welcomeBenefits: "3,000 Travel Credits on spending ₹60,000 within 60 days",
        starRating: 4.0
      },
      {
        category: Category.TRAVEL,
        bankName: BankName.SBI,
        cardName: "SBI Card Miles Elite",
        description: "Premium SBI card with up to 6 Travel Credits per ₹200 spend, extensive lounge access and travel redemptions.",
        image: "https://cd9941cc.delivery.rocketcdn.me/wp-content/uploads/2024/04/SBI-Card-Miles-Elite.webp",
        joiningFee: 4999,
        renewalFee: 4999,
        bestSuitedFor: "Travel",
        rewardType: "Reward Points",
        welcomeBenefits: "5,000 Travel Credits on ₹1 lakh spend in first 60 days",
        starRating: 5.0
      },
      {
        category: Category.TRAVEL,
        bankName: BankName.RBL,
        cardName: "RBL World Safari Credit Card",
        description: "Global travel card with zero forex markup, MakeMyTrip voucher, and lounge access with Priority Pass.",
        image: "https://cd9941cc.delivery.rocketcdn.me/wp-content/uploads/2021/07/RBL-World-Safari-Credit-Card.webp",
        joiningFee: 3000,
        renewalFee: 3000,
        bestSuitedFor: "Travel",
        rewardType: "Reward Points",
        welcomeBenefits: "MakeMyTrip Voucher Worth ₹3,000",
        starRating: 4.0
      },
      {
        category: Category.TRAVEL,
        bankName: BankName.AXIS,
        cardName: "Axis Bank Horizon Credit Card",
        description: "Mid-range Axis card offering 5 EDGE Miles per ₹100 on travel spends, and extensive lounge access across India and abroad.",
        image: "https://cd9941cc.delivery.rocketcdn.me/wp-content/uploads/2024/06/Axis-Bank-Horizon-Credit-Card.webp",
        joiningFee: 3000,
        renewalFee: 3000,
        bestSuitedFor: "Travel",
        rewardType: "Reward Points",
        welcomeBenefits: "5,000 EDGE Miles on spends of ₹1,000 within 30 days",
        starRating: 4.0
      },
      {
        category: Category.TRAVEL,
        bankName: BankName.ICICI,
        cardName: "MakeMyTrip ICICI Bank Credit Card",
        description: "Co-branded card offering myCash rewards and lounge access; best suited for MakeMyTrip loyal customers.",
        image: "https://cd9941cc.delivery.rocketcdn.me/wp-content/uploads/2024/10/MakeMyTrip-ICICI-Bank-Credit-Card.webp",
        joiningFee: 999,
        renewalFee: 999,
        bestSuitedFor: "Travel",
        rewardType: "Reward Points",
        welcomeBenefits: "₹1,000 MMT Voucher and MMTBLACK Gold Tier Membership",
        starRating: 4.0
      },
      {
        category: Category.TRAVEL,
        bankName: BankName.AU,
        cardName: "ixigo AU Credit Card",
        description: "Lifetime-free travel card with zero forex charges and ixigo Money rewards on travel bookings.",
        image: "https://cd9941cc.delivery.rocketcdn.me/wp-content/uploads/2023/11/ixigo-AU-Card.webp",
        joiningFee: 0,
        renewalFee: 0,
        bestSuitedFor: "Travel",
        rewardType: "Reward Points",
        welcomeBenefits: "1,000 RPs and ₹1,000 ixigo Money Voucher on first transaction within 30 days",
        starRating: 4.0
      },
      {
        category: Category.TRAVEL,
        bankName: BankName.ICICI,
        cardName: "Adani One ICICI Bank Platinum Credit Card",
        description: "Domestic travel card offering Adani Reward Points and benefits across Adani airports, including valet parking and lounge access.",
        image: "https://cd9941cc.delivery.rocketcdn.me/wp-content/uploads/2024/06/Adani-One-ICICI-Bank-Platinum-Credit-Card.webp",
        joiningFee: 750,
        renewalFee: 750,
        bestSuitedFor: "Travel",
        rewardType: "Adani Reward Points",
        welcomeBenefits: "Hotel Voucher Worth ₹1,000, Flight Voucher Worth ₹2,000 on spends of ₹10,000",
        starRating: 4.0
      },
      // Reward Cards
      {
        category: Category.REWARDS,
        bankName: BankName.SBI,
        cardName: "SBI SimplyCLICK Credit Card",
        description: "Entry-level SBI card ideal for online shopping with 10X rewards on select merchants and Amazon welcome voucher.",
        image: "https://cd9941cc.delivery.rocketcdn.me/wp-content/uploads/2021/07/SBI-SimplyCLICK-Credit-Card.webp",
        joiningFee: 499,
        renewalFee: 499,
        bestSuitedFor: "Shopping",
        rewardType: "Reward Points",
        welcomeBenefits: "Amazon Gift Card Worth ₹500",
        starRating: 4.0
      },
      {
        category: Category.REWARDS,
        bankName: BankName.HDFC,
        cardName: "HDFC Bank Regalia Gold Credit Card",
        description: "Premium HDFC card focused on travel and shopping, includes welcome vouchers, lounge access, and elite memberships.",
        image: "https://cd9941cc.delivery.rocketcdn.me/wp-content/uploads/2023/03/HDFC-Bank-Regalia-Gold-Credit-Card.webp",
        joiningFee: 2500,
        renewalFee: 2500,
        bestSuitedFor: "Travel, Shopping",
        rewardType: "Reward Points",
        welcomeBenefits: "Voucher Worth ₹2,500 + MMT Black Elite + Club Vistara Silver",
        starRating: 5.0
      },
      {
        category: Category.REWARDS,
        bankName: BankName.INDUSIND,
        cardName: "IndusInd Bank Pinnacle World Credit Card",
        description: "High-end card with premium welcome gifts, lounge access, and rewards on travel and shopping. Lifetime free renewal.",
        image: "https://cd9941cc.delivery.rocketcdn.me/wp-content/uploads/2021/07/IndusInd-Bank-Pinnacle-World-Credit-Card.webp",
        joiningFee: 14999,
        renewalFee: 0,
        bestSuitedFor: "Travel, Shopping",
        rewardType: "Reward Points",
        welcomeBenefits: "Choice of Luxe gift card, Oberoi stay, or retail vouchers",
        starRating: 5.0
      },
      {
        category: Category.REWARDS,
        bankName: BankName.HDFC,
        cardName: "HDFC Bank Diners Club Black Metal Edition Credit Card",
        description: "Super-premium lifestyle card offering high rewards, memberships, lounge & golf access, and low forex markup.",
        image: "https://cd9941cc.delivery.rocketcdn.me/wp-content/uploads/2023/10/HDFC-Bank-Diners-Club-Black-Metal-Edition-Credit-Card.webp",
        joiningFee: 10000,
        renewalFee: 10000,
        bestSuitedFor: "Travel, Dining, Shopping",
        rewardType: "Reward Points",
        welcomeBenefits: "Club Marriott, Swiggy One, and Amazon Prime on ₹1.5L spend in 90 days",
        starRating: 5.0
      },
      {
        category: Category.REWARDS,
        bankName: BankName.BOB,
        cardName: "BOBCARD ETERNA Credit Card",
        description: "Reward-heavy credit card with great perks in travel, fitness, and insurance. High reward rate and milestone bonuses.",
        image: "https://cd9941cc.delivery.rocketcdn.me/wp-content/uploads/2021/07/BOBCARD-ETERNA-Credit-Card.webp",
        joiningFee: 2499,
        renewalFee: 2499,
        bestSuitedFor: "Travel, Shopping",
        rewardType: "Reward Points",
        welcomeBenefits: "6-month FitPass Pro + 10,000 Bonus Reward Points",
        starRating: 5.0
      },
      // Forex Cards
      {
        category: Category.FOREX,
        bankName: BankName.YES,
        cardName: "BookMyForex YES Bank Forex Card",
        description: "Co-branded foreign travel card supporting multiple currencies, offers seamless international transactions and discounts across categories.",
        image: "https://cd9941cc.delivery.rocketcdn.me/wp-content/uploads/2022/08/BookMyForex-YES-Bank-Forex-Card.webp",
        joiningFee: 0,
        renewalFee: 250,
        bestSuitedFor: "Travel, International Spends",
        rewardType: "Reward Points",
        welcomeBenefits: "₹200 discount on 1st BookMyForex transaction (Promo code: NEWTOBMF)",
        starRating: 4.0
      },
      {
        category: Category.FOREX,
        bankName: BankName.AXIS,
        cardName: "Axis Bank Multi-Currency Forex Card",
        description: "Prepaid card supporting 16 global currencies with no markup on loaded currency. Includes discounts on roaming packs and TripAssist support.",
        image: "https://cd9941cc.delivery.rocketcdn.me/wp-content/uploads/2021/10/Axis-Bank-Multi-Currency-Forex-Card.webp",
        joiningFee: 300,
        renewalFee: 0,
        bestSuitedFor: "Shopping, International Spends",
        rewardType: "Reward Points",
        welcomeBenefits: "None",
        starRating: 4.0
      },
      {
        category: Category.FOREX,
        bankName: BankName.HDFC,
        cardName: "HDFC Bank Multicurrency Platinum ForexPlus Chip Card",
        description: "Multicurrency card supporting 22 currencies with markup-free usage and additional benefits like Amazon vouchers and global concierge services.",
        image: "https://cd9941cc.delivery.rocketcdn.me/wp-content/uploads/2021/10/HDFC-Bank-Multicurrency-Platinum-ForexPlus-Chip-Card.webp",
        joiningFee: 500,
        renewalFee: 0,
        bestSuitedFor: "Travel, International Spends",
        rewardType: "Reward Points",
        welcomeBenefits: "Fee waiver on 1st load of USD 1,000 or equivalent",
        starRating: 4.0
      },
      {
        category: Category.FOREX,
        bankName: BankName.SBI,
        cardName: "State Bank Multi-Currency Foreign Travel Card",
        description: "Lowest issuance fee card supporting 7 currencies. No markup on loaded currency, 3% fee on cross-currency transactions.",
        image: "https://cd9941cc.delivery.rocketcdn.me/wp-content/uploads/2021/10/State-Bank-Multi-Currency-Foreign-Travel-Card.webp",
        joiningFee: 100,
        renewalFee: 0,
        bestSuitedFor: "Travel, International Spends",
        rewardType: "Reward Points",
        welcomeBenefits: "None",
        starRating: 4.0
      },
      // Domestic Lounge Cards
      {
        category: Category.DOMESTIC_LOUNGE,
        bankName: BankName.FEDERAL,
        cardName: "Scapia Federal Credit Card",
        description: "Lifetime-free credit card offering complimentary domestic airport lounge access in India with minimal spend. Provides zero forex charges on international transactions and travel-focused benefits.",
        image: "https://cd9941cc.delivery.rocketcdn.me/wp-content/uploads/2023/11/Scapia-Federal-Credit-Card.webp",
        joiningFee: 0,
        renewalFee: 0,
        bestSuitedFor: "Travel, Shopping",
        rewardType: "Reward Points",
        welcomeBenefits: "None",
        starRating: 4.0
      },
      {
        category: Category.DOMESTIC_LOUNGE,
        bankName: BankName.IDFC,
        cardName: "IDFC FIRST Wealth Credit Card",
        description: "Premium lifetime-free card with travel, shopping, and lifestyle rewards. Offers 10X reward points, lounge access, spa/golf privileges, and insurance coverage.",
        image: "https://cd9941cc.delivery.rocketcdn.me/wp-content/uploads/2021/07/IDFC-FIRST-Wealth-Credit-Card.webp",
        joiningFee: 0,
        renewalFee: 0,
        bestSuitedFor: "Movies, Travel, Shopping",
        rewardType: "Reward Points",
        welcomeBenefits: "₹500 vouchers from Uber, Amazon, Bigbasket on ₹5,000 spend in 30 days. 5% cashback up to ₹1,000 on first EMI transaction.",
        starRating: 5.0
      },
      {
        category: Category.DOMESTIC_LOUNGE,
        bankName: BankName.AXIS,
        cardName: "Axis Bank Olympus Credit Card",
        description: "Premium lifestyle and travel card offering high reward rates, luxury hotel vouchers, unlimited lounge access, and concierge benefits.",
        image: "https://cd9941cc.delivery.rocketcdn.me/wp-content/uploads/2024/06/Axis-Bank-Olympus-Credit-Card.webp",
        joiningFee: 20000,
        renewalFee: 20000,
        bestSuitedFor: "Movies, Travel, Shopping",
        rewardType: "Reward Points",
        welcomeBenefits: "2,500 EDGE Miles and hotel vouchers worth ₹10,000 (Taj/ITC).",
        starRating: 5.0
      },
      // Cashback Cards
      {
        category: Category.CASHBACK,
        bankName: BankName.AXIS,
        cardName: "Airtel Axis Bank Credit Card",
        description: "Co-branded card ideal for Airtel users offering high cashback on utility and Airtel services via Airtel Thanks app. Modest fee with direct cashback redemption.",
        image: "https://cd9941cc.delivery.rocketcdn.me/wp-content/uploads/2022/05/Airtel-Axis-Bank-Credit-Card.webp",
        joiningFee: 500,
        renewalFee: 500,
        bestSuitedFor: "Travel, Food, Utility Bill Payment",
        rewardType: "Cashback",
        welcomeBenefits: "Amazon Voucher Worth ₹500",
        starRating: 4.0
      },
      {
        category: Category.CASHBACK,
        bankName: BankName.HSBC,
        cardName: "HSBC Live+ Credit Card",
        description: "Cashback card designed for daily grocery, dining, and food delivery spends with additional savings on movies and complimentary lounge access.",
        image: "https://cd9941cc.delivery.rocketcdn.me/wp-content/uploads/2023/11/HSBC-LivePlus-Credit-Card.webp",
        joiningFee: 999,
        renewalFee: 999,
        bestSuitedFor: "Shopping, Food",
        rewardType: "Cashback",
        welcomeBenefits: "₹1,000 Cashback on Spending ₹20,000 in the First 30 Days",
        starRating: 4.0
      },
      {
        category: Category.CASHBACK,
        bankName: BankName.AXIS,
        cardName: "Axis Bank Cashback Credit Card",
        description: "Straightforward cashback card ideal for online shoppers, offering high rewards and low complexity with quick welcome bonus.",
        image: "https://cd9941cc.delivery.rocketcdn.me/wp-content/uploads/2022/07/Axis-Bank-Cashback-Credit-Card.webp",
        joiningFee: 1000,
        renewalFee: 1000,
        bestSuitedFor: "Shopping",
        rewardType: "Cashback",
        welcomeBenefits: "5,000 EDGE Reward Points on First Transaction Within 30 Days",
        starRating: 4.0
      },
      // RuPay Cards
      {
        category: Category.RUPAY,
        bankName: BankName.SBI,
        cardName: "SBI SimplySAVE UPI Rupay Credit Card",
        description: "Beginner-friendly rewards card offering accelerated 10X reward points on daily purchases like groceries, movies, and department stores. Fee waiver on annual spend of ₹1L.",
        image: "https://cd9941cc.delivery.rocketcdn.me/wp-content/uploads/2021/08/SBI-SimplySAVE-Credit-Card.webp",
        joiningFee: 499,
        renewalFee: 499,
        bestSuitedFor: "Shopping",
        rewardType: "Reward Points",
        welcomeBenefits: "2,000 Reward Points on spending ₹2,000 in the first 60 days",
        starRating: 4.0
      },
      {
        category: Category.RUPAY,
        bankName: BankName.HDFC,
        cardName: "Tata Neu Plus HDFC Bank Credit Card",
        description: "Entry-level co-branded card earning NeuCoins on Tata brand spends and UPI payments through Tata Neu app. Includes airport lounge access.",
        image: "https://cd9941cc.delivery.rocketcdn.me/wp-content/uploads/2022/08/Tata-Neu-Plus-HDFC-Bank-Credit-Card.webp",
        joiningFee: 499,
        renewalFee: 499,
        bestSuitedFor: "Shopping",
        rewardType: "NeuCoins",
        welcomeBenefits: "499 NeuCoins",
        starRating: 4.0
      },
      {
        category: Category.RUPAY,
        bankName: BankName.IDFC,
        cardName: "IDFC HPCL FIRST Power Credit Card",
        description: "Fuel-focused credit card co-branded with HPCL. Offers cashback on first HPCL fuel spend, additional rewards, and EMI cashback benefits.",
        image: "https://cd9941cc.delivery.rocketcdn.me/wp-content/uploads/2023/04/IDFC-HPCL-FIRST-Power-Credit-Card.webp",
        joiningFee: 199,
        renewalFee: 199,
        bestSuitedFor: "Fuel",
        rewardType: "Reward Points",
        welcomeBenefits: "₹250 cashback on first HPCL fuel transaction and up to ₹1,000 cashback on first EMI transaction",
        starRating: 4.0
      },
      // International Lounge Cards
      {
        category: Category.INTERNATIONAL_LOUNGE,
        bankName: BankName.ICICI,
        cardName: "Times Black ICICI Bank Credit Card",
        description: "Luxury lifestyle card with premium travel and shopping perks including unlimited lounge access, helicopter airport transfers, and vouchers worth ₹20,000.",
        image: "https://cd9941cc.delivery.rocketcdn.me/wp-content/uploads/2024/12/Times-Black-ICICI-Bank-Credit-Card.webp",
        joiningFee: 20000,
        renewalFee: 20000,
        bestSuitedFor: "Travel | Shopping",
        rewardType: "Reward Points",
        welcomeBenefits: "₹10,000 EaseMyTrip Hotel Voucher, ₹10,000 Onevasco & More Visa Services, ₹3,000 Toni & Guy Voucher and Zomato Gold Membership",
        starRating: 5.0
      },
      {
        category: Category.INTERNATIONAL_LOUNGE,
        bankName: BankName.IDFC,
        cardName: "IDFC First Bank Mayura Credit Card",
        description: "Premium card with airport lounge access (including guest), zero forex fees, and 10X rewards on high spends including rent, education, and utilities.",
        image: "https://cd9941cc.delivery.rocketcdn.me/wp-content/uploads/2024/08/IDFC-Bank-Mayura-Credit-Card.webp",
        joiningFee: 5999,
        renewalFee: 5999,
        bestSuitedFor: "Movies | Travel | Shopping",
        rewardType: "Reward Points",
        welcomeBenefits: "Maximum Cashback of ₹4,000 on Making Four Transactions of ₹1,000 or More",
        starRating: 5.0
      },
      {
        category: Category.INTERNATIONAL_LOUNGE,
        bankName: BankName.AXIS,
        cardName: "Axis Bank SELECT Credit Card",
        description: "Feature-rich card offering up to 20 reward points per ₹100 spent, dining discounts, lounge access, and welcome bonus worth ₹2,000.",
        image: "https://cd9941cc.delivery.rocketcdn.me/wp-content/uploads/2021/08/Axis-Bank-SELECT-Credit-Card.webp",
        joiningFee: 3000,
        renewalFee: 3000,
        bestSuitedFor: "Travel | Shopping",
        rewardType: "Reward Points",
        welcomeBenefits: "10,000 EDGE Reward Points (Worth ₹2,000) on First Transaction",
        starRating: 4.0
      },
      // Fuel Cards
      {
        category: Category.FUEL,
        bankName: BankName.AXIS,
        cardName: "IndianOil Axis Bank Premium Credit Card",
        description: "Fuel-centric credit card offering 6X EDGE Miles at IndianOil outlets, plus grocery and other spend rewards. Includes lounge access and dining discounts.",
        image: "https://cd9941cc.delivery.rocketcdn.me/wp-content/uploads/2024/06/IndianOil-Axis-Bank-Premium-Credit-Card.webp",
        joiningFee: 1000,
        renewalFee: 1000,
        bestSuitedFor: "Fuel",
        rewardType: "Reward Points",
        welcomeBenefits: "500 EDGE Miles on the First Transaction Within 30 Days of Card Issuance",
        starRating: 4.0
      },
      {
        category: Category.FUEL,
        bankName: BankName.HDFC,
        cardName: "IndianOil HDFC Bank Credit Card",
        description: "Co-branded fuel credit card with up to 50L free fuel/year, accelerated points on IOCL spends, and annual fee waiver on milestone spending.",
        image: "https://cd9941cc.delivery.rocketcdn.me/wp-content/uploads/2021/08/IndianOil-HDFC-Bank-Credit-Card.webp",
        joiningFee: 500,
        renewalFee: 500,
        bestSuitedFor: "Fuel",
        rewardType: "Reward Points",
        welcomeBenefits: "N/A",
        starRating: 4.0
      },
      {
        category: Category.FUEL,
        bankName: BankName.IDFC,
        cardName: "IDFC HPCL First Power Plus Credit Card",
        description: "Advanced HPCL-IDFC fuel card with 6.5% fuel savings, lifestyle offers, grocery cashback, and welcome benefits worth ₹1,000.",
        image: "https://cd9941cc.delivery.rocketcdn.me/wp-content/uploads/2023/04/IDFC-HPCL-First-Power-Plus-Credit-Card.webp",
        joiningFee: 499,
        renewalFee: 499,
        bestSuitedFor: "Fuel",
        rewardType: "Reward Points",
        welcomeBenefits: "Up to ₹500 cashback on HPCL fuel txn & up to 5% cashback (₹1,000 cap) on first EMI txn",
        starRating: 5.0
      },
      // International Travel Cards
      {
        category: Category.INTERNATIONAL_TRAVEL,
        bankName: BankName.YES,
        cardName: "Yes Bank Marquee Credit Card",
        description: "Premium card with unlimited lounge access, movie ticket deals, low foreign markup, and high reward points on all spends.",
        image: "https://cd9941cc.delivery.rocketcdn.me/wp-content/uploads/2023/12/Yes-Bank-Marquee-Credit-Card.webp",
        joiningFee: 9999,
        renewalFee: 4999,
        bestSuitedFor: "Movies",
        rewardType: "Reward Points",
        welcomeBenefits: "Unlimited Lounge Access, BOGO movie offers, dining discounts",
        starRating: 5.0
      },
      {
        category: Category.INTERNATIONAL_TRAVEL,
        bankName: BankName.STANDARD_CHARTERED_BANK,
        cardName: "Standard Chartered Ultimate Credit Card",
        description: "Premium card offering international lounge access, strong rewards on global spends, and comprehensive travel insurance.",
        image: "https://cd9941cc.delivery.rocketcdn.me/wp-content/uploads/2021/06/Standard-Chartered-Ultimate-Credit-Card.webp",
        joiningFee: 5000,
        renewalFee: 5000,
        bestSuitedFor: "Travel",
        rewardType: "Reward Points",
        welcomeBenefits: "6,000 reward points, complimentary Priority Pass membership",
        starRating: 5.0
      },
      {
        category: Category.INTERNATIONAL_TRAVEL,
        bankName: BankName.AXIS,
        cardName: "Axis Bank Magnus Credit Card",
        description: "High-end travel card with unlimited lounge access, decent rewards, and travel insurance benefits despite higher markup fees.",
        image: "https://cd9941cc.delivery.rocketcdn.me/wp-content/uploads/2021/08/Axis-Bank-Magnus-Credit-Card.webp",
        joiningFee: 12500,
        renewalFee: 12500,
        bestSuitedFor: "Travel",
        rewardType: "Reward Points",
        welcomeBenefits: "Unlimited Complimentary International Airport Lounge Access Via Priority Pass",
        starRating: 4.0
      },
      // Fintech Cards
      {
        category: Category.FINTECH,
        bankName: BankName.YES,
        cardName: "YES Bank POP CLUB Credit Card",
        description: "Zero-fee card offering lifestyle benefits and rewards. Ideal for online shoppers and lifestyle-focused users.",
        image: "https://cd9941cc.delivery.rocketcdn.me/wp-content/uploads/2025/02/YES-Bank-POP-CLUB-Credit-Card.webp",
        joiningFee: 0,
        renewalFee: 0,
        bestSuitedFor: "Shopping",
        rewardType: "Reward Points",
        welcomeBenefits: "₹5,000 value including 500 POPcoins, Cleartrip ₹750 voucher, Cult Sport ₹500 voucher, Zomato Gold 3-month membership",
        starRating: 4.0
      },
      {
        category: Category.FINTECH,
        bankName: BankName.BOB,
        cardName: "BOBCARD Uni GoldX Credit Card",
        description: "Lifetime free card suitable for frequent shoppers. Straightforward reward program with minimal overhead.",
        image: "https://cd9941cc.delivery.rocketcdn.me/wp-content/uploads/2025/06/Uni-GoldX-Credit-Card.webp",
        joiningFee: 0,
        renewalFee: 0,
        bestSuitedFor: "Shopping",
        rewardType: "Reward Points",
        welcomeBenefits: "N/A",
        starRating: 4.0
      },
      {
        category: Category.FINTECH,
        bankName: BankName.YES,
        cardName: "YES Bank Anq Phi Credit Card",
        description: "Premium credit card tailored for high-end lifestyle needs. Expect exclusive benefits, although specifics are limited.",
        image: "https://cd9941cc.delivery.rocketcdn.me/wp-content/uploads/2025/02/YES-Bank-Anq-Phi-Credit-Card.webp",
        joiningFee: 0,
        renewalFee: 0,
        bestSuitedFor: "Lifestyle",
        rewardType: "Reward Points",
        welcomeBenefits: "N/A",
        starRating: 4.0
      }
    ];

    // Insert cards in smaller batches to avoid prepared statement issues
    const batchSize = 10;
    for (let i = 0; i < cards.length; i += batchSize) {
      const batch = cards.slice(i, i + batchSize);
      await prisma.cards.createMany({
        data: batch,
        skipDuplicates: true,
      });
      console.log(`Inserted batch ${i / batchSize + 1}`);
    }

    console.log('Seed data inserted successfully');
  } catch (error) {
    console.error('Error during seeding:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  }); 