export let CONTEXT_PATH = `
"You are a professional credit card expert with deep knowledge of the Indian credit card market. Your expertise includes:

1. Understanding of all major credit card categories and their benefits
2. Knowledge of current market trends and offers
3. Ability to recommend cards based on user needs and spending patterns
4. Familiarity with reward programs, cashback offers, and travel benefits
5. Understanding of fee structures and eligibility criteria

When responding to user queries:
1. Always format your response using HTML elements for better structure
2. Always use tailwind classname as well to structure it properly like if space is required then provide Classname="mb-3", or something like this. 
   Also dont use backgound colors, you can use only white color for text. Dont include <html>, <head>, <title>, <link>, <!DOCTYPE html>.
3. Always consider:
   - User's spending patterns
   - Income level
   - Credit score
   - Specific needs (travel, shopping, etc.)
   - Fee sensitivity

4. Provide clear, concise, and accurate information
5. Include relevant terms and conditions
6. Mention any current offers or promotions
7. Highlight both pros and cons of recommended cards

8. Use proper HTML formatting:
   - <h1> for main title
   - <h2> for section headers
   - <h3> for card names
   - <h4> for subsection headers
   - <p> for paragraphs
   - <ul> and <li> for lists
   - <div> for grouping content
9. dont have ${ "```html and ```"} in the response I know it would be html and its format so dont include them.
Remember to maintain a professional tone and focus on helping users make informed decisions about credit cards. Always format your entire response in HTML for better readability. 
Also your response should not be more then 200 words try to keep it under 100 words only but if required make the summaries very small and accomodate for extra space. User should be given unnecessary details. Try to keep the response very short and concise and ask follow up questions like 

"do you want to know about this next relevant card next?" or "Would you like a bit more details about your card?"

With this, keep proper spacing to make it more readable for the user. Paragraph should have proper spacing and letter distance.
"
`

export let CREDIT_CARDS = `
This is Cashback SBI Credit Card, from SBI, with category BEST which has a description like this The SBI Cashback Credit Card is a no-nonsense cashback card offering 5% cashback on most online transactions and 1% cashback on offline purchases and bill payments. Ideal for frequent online shoppers and food delivery users. It has joiningfee 999, renewalfee 999, and is bestsuited for Shopping | Food. also it has welcome benefits N/A, and a starrating of 5.0 with reward type CASHBACK

This is Swiggy HDFC Bank Credit Card, from HDFC, with category BEST which has a description like this Popular among millennials, the Swiggy HDFC Bank Credit Card offers 10% cashback on Swiggy, Dineout, and Instamart, and 5% cashback on Amazon, Flipkart, Ola, Myntra, and H&M. Mastercard World perks included. It has joiningfee 500, renewalfee 500, and is bestsuited for Dining | Food. also it has welcome benefits Complimentary 3-Month Swiggy One Membership, and a starrating of 5.0 with reward type CASHBACK

This is HDFC Bank Millennia Credit Card, from HDFC, with category BEST which has a description like this Ideal for online-savvy youth, the HDFC Millennia Credit Card offers 5% cashback on Amazon, Flipkart, Myntra, Swiggy, Zomato, cult.fit, and more. Cashback capped at ₹1,000 per statement cycle. It has joiningfee 1000, renewalfee 1000, and is bestsuited for Shopping. also it has welcome benefits 1,000 CashPoints, and a starrating of 5.0 with reward type CASHBACK

This is Amazon Pay ICICI Bank Credit Card, from ICICI, with category BEST which has a description like this The Amazon Pay ICICI Credit Card offers 5% cashback for Prime members and 3% for non-Prime on Amazon, 2% with Amazon Pay partners, and 1% elsewhere. Lifetime free with welcome benefits up to ₹2,500. It has joiningfee 0, renewalfee 0, and is bestsuited for Shopping. also it has welcome benefits Cashback and Discounts Up to ₹2,500 (Both for Prime and Non-Prime Members) and One Month EazyDiner Membership, and a starrating of 5.0 with reward type CASHBACK

This is Flipkart Axis Bank Credit Card, from AXIS, with category BEST which has a description like this Earn 5% cashback on Flipkart and 4% on Swiggy, PVR, cult.fit, and Uber with the Flipkart Axis Credit Card. Comes with ₹600 welcome benefits and four complimentary domestic airport lounge accesses annually. It has joiningfee 500, renewalfee 500, and is bestsuited for Shopping. also it has welcome benefits Introductory Benefits Worth Rs. 600 on Card Issuance, and a starrating of 5.0 with reward type CASHBACK

This is EazyDiner IndusInd Platinum Credit Card, from INDUSIND, with category LIFETIME_FREE which has a description like this The EazyDiner IndusInd Platinum Credit Card is designed specifically for food and dining. It offers up to a 25% discount on dining expenditures via EazyDiner. Cardholders receive a 3-month EazyDiner Prime membership and 500 bonus EazyPoints as a welcome benefit. It has joiningfee 0, renewalfee 0, and is bestsuited for Food. also it has welcome benefits 3-Month EazyDiner Prime Membership and 500 Bonus EazyPoints, and a starrating of 4.0 with reward type REWARD_POINTS

This is IDFC FIRST Select Credit Card, from IDFC, with category LIFETIME_FREE which has a description like this The IDFC FIRST Select Credit Card is a premium offering with benefits across travel, shopping, entertainment, and more. It offers up to 10x reward points, complimentary lounge access, and lifetime free membership. It has joiningfee 0, renewalfee 0, and is bestsuited for Shopping | Travel | Entertainment. also it has welcome benefits N/A, and a starrating of 5.0 with reward type REWARD_POINTS

This is Axis Bank Neo Credit Card, from AXIS, with category LIFETIME_FREE which has a description like this The Axis Bank Neo Credit Card is a top lifetime-free option for millennials and first-time users. Benefits include discounts on Zomato, Myntra, Blinkit, and BookMyShow, and cashback on utilities. UPI linkage is available for RuPay users. It has joiningfee 0, renewalfee 0, and is bestsuited for Shopping | Food. also it has welcome benefits 100% Cashback Up to ₹300 on First Utility Bill Payment, and a starrating of 4.0 with reward type REWARD_POINTS

This is IndusInd Legend Credit Card, from INDUSIND, with category LIFETIME_FREE which has a description like this The IndusInd Legend Credit Card is a lifetime free card ideal for first-time applicants. It offers 1 reward point per ₹100 spent on weekdays and 2 on weekends, along with movie BOGO offers. It has joiningfee 0, renewalfee 0, and is bestsuited for Shopping. also it has welcome benefits N/A, and a starrating of 4.0 with reward type REWARD_POINTS

This is HSBC Visa Platinum Credit Card, from HSBC, with category LIFETIME_FREE which has a description like this HSBC Visa Platinum is HSBC's only lifetime free card. Ideal for new users looking for no-fee entry-level cards with discounts and offers. Earn 2 Reward Points per ₹150 spent. It has joiningfee 0, renewalfee 0, and is bestsuited for Shopping. also it has welcome benefits N/A, and a starrating of 4.0 with reward type REWARD_POINTS

This is AU Bank LIT Credit Card, from AU, with category LIFETIME_FREE which has a description like this AU Bank LIT is India's first customizable credit card. It lets you select benefits from five categories (travel, OTT, shopping, cashback, etc.) every 90 days. Offers accelerated reward points, 5% cashback, and complimentary lounge access. It has joiningfee 0, renewalfee 0, and is bestsuited for Custom Benefits. also it has welcome benefits Custom Features with Base Rewards, and a starrating of 4.0 with reward type REWARD_POINTS

This is Axis Bank Atlas Credit Card, from AXIS, with category TRAVEL which has a description like this Travel-focused card with tiered EDGE Miles rewards, offering 5 EDGE Miles per ₹100 spent and extensive lounge access. It has joiningfee 5000, renewalfee 5000, and is bestsuited for Travel. also it has welcome benefits 2,500 Edge Miles on completing 1 transaction within 30 days of card issuance, and a starrating of 4.0 with reward type REWARD_POINTS

This is American Express Platinum Travel Credit Card, from AMERICAN_EXPRESS, with category TRAVEL which has a description like this Premium travel card offering 10,000 Membership Rewards Points and lounge access with Priority Pass membership. It has joiningfee 5000, renewalfee 5000, and is bestsuited for Travel, Shopping. also it has welcome benefits 10,000 Membership Rewards Points, and a starrating of 5.0 with reward type REWARD_POINTS

This is SBI MILES PRIME Credit Card, from SBI, with category TRAVEL which has a description like this Mid-tier travel card with Travel Credits, lounge access, travel insurance, and Priority Pass membership. It has joiningfee 2999, renewalfee 2999, and is bestsuited for Travel. also it has welcome benefits 3,000 Travel Credits on spending ₹60,000 within 60 days, and a starrating of 4.0 with reward type REWARD_POINTS

This is SBI Card Miles Elite, from SBI, with category TRAVEL which has a description like this Premium SBI card with up to 6 Travel Credits per ₹200 spend, extensive lounge access and travel redemptions. It has joiningfee 4999, renewalfee 4999, and is bestsuited for Travel. also it has welcome benefits 5,000 Travel Credits on ₹1 lakh spend in first 60 days, and a starrating of 5.0 with reward type REWARD_POINTS

This is RBL World Safari Credit Card, from RBL, with category TRAVEL which has a description like this Global travel card with zero forex markup, MakeMyTrip voucher, and lounge access with Priority Pass. It has joiningfee 3000, renewalfee 3000, and is bestsuited for Travel. also it has welcome benefits MakeMyTrip Voucher Worth ₹3,000, and a starrating of 4.0 with reward type REWARD_POINTS

This is Axis Bank Horizon Credit Card, from AXIS, with category TRAVEL which has a description like this Mid-range Axis card offering 5 EDGE Miles per ₹100 on travel spends, and extensive lounge access across India and abroad. It has joiningfee 3000, renewalfee 3000, and is bestsuited for Travel. also it has welcome benefits 5,000 EDGE Miles on spends of ₹1,000 within 30 days, and a starrating of 4.0 with reward type REWARD_POINTS

This is MakeMyTrip ICICI Bank Credit Card, from ICICI, with category TRAVEL which has a description like this Co-branded card offering myCash rewards and lounge access; best suited for MakeMyTrip loyal customers. It has joiningfee 999, renewalfee 999, and is bestsuited for Travel. also it has welcome benefits ₹1,000 MMT Voucher and MMTBLACK Gold Tier Membership, and a starrating of 4.0 with reward type REWARD_POINTS

This is ixigo AU Credit Card, from AU, with category TRAVEL which has a description like this Lifetime-free travel card with zero forex charges and ixigo Money rewards on travel bookings. It has joiningfee 0, renewalfee 0, and is bestsuited for Travel. also it has welcome benefits 1,000 RPs and ₹1,000 ixigo Money Voucher on first transaction within 30 days, and a starrating of 4.0 with reward type REWARD_POINTS

This is Adani One ICICI Bank Platinum Credit Card, from ICICI, with category TRAVEL which has a description like this Domestic travel card offering Adani Reward Points and benefits across Adani airports, including valet parking and lounge access. It has joiningfee 750, renewalfee 750, and is bestsuited for Travel. also it has welcome benefits Hotel Voucher Worth ₹1,000, Flight Voucher Worth ₹2,000 on spends of ₹10,000, and a starrating of 4.0 with reward type ADANI_REWARD_POINTS

This is SBI SimplyCLICK Credit Card, from SBI, with category REWARDS which has a description like this Entry-level SBI card ideal for online shopping with 10X rewards on select merchants and Amazon welcome voucher. It has joiningfee 499, renewalfee 499, and is bestsuited for Shopping. also it has welcome benefits Amazon Gift Card Worth ₹500, and a starrating of 4.0 with reward type REWARD_POINTS

This is HDFC Bank Regalia Gold Credit Card, from HDFC, with category REWARDS which has a description like this Premium HDFC card focused on travel and shopping, includes welcome vouchers, lounge access, and elite memberships. It has joiningfee 2500, renewalfee 2500, and is bestsuited for Travel, Shopping. also it has welcome benefits Voucher Worth ₹2,500 + MMT Black Elite + Club Vistara Silver, and a starrating of 5.0 with reward type REWARD_POINTS

This is IndusInd Bank Pinnacle World Credit Card, from INDUSIND, with category REWARDS which has a description like this High-end card with premium welcome gifts, lounge access, and rewards on travel and shopping. Lifetime free renewal. It has joiningfee 14999, renewalfee 0, and is bestsuited for Travel, Shopping. also it has welcome benefits Choice of Luxe gift card, Oberoi stay, or retail vouchers, and a starrating of 5.0 with reward type REWARD_POINTS

This is HDFC Bank Diners Club Black Metal Edition Credit Card, from HDFC, with category REWARDS which has a description like this Super-premium lifestyle card offering high rewards, memberships, lounge & golf access, and low forex markup. It has joiningfee 10000, renewalfee 10000, and is bestsuited for Travel, Dining, Shopping. also it has welcome benefits Club Marriott, Swiggy One, and Amazon Prime on ₹1.5L spend in 90 days, and a starrating of 5.0 with reward type REWARD_POINTS

This is BOBCARD ETERNA Credit Card, from BOB, with category REWARDS which has a description like this Reward-heavy credit card with great perks in travel, fitness, and insurance. High reward rate and milestone bonuses. It has joiningfee 2499, renewalfee 2499, and is bestsuited for Travel, Shopping. also it has welcome benefits 6-month FitPass Pro + 10,000 Bonus Reward Points, and a starrating of 5.0 with reward type REWARD_POINTS

This is BookMyForex YES Bank Forex Card, from YES, with category FOREX which has a description like this Co-branded foreign travel card supporting multiple currencies, offers seamless international transactions and discounts across categories. It has joiningfee 0, renewalfee 250, and is bestsuited for Travel, International Spends. also it has welcome benefits ₹200 discount on 1st BookMyForex transaction (Promo code: NEWTOBMF), and a starrating of 4.0 with reward type REWARD_POINTS

This is Axis Bank Multi-Currency Forex Card, from AXIS, with category FOREX which has a description like this Prepaid card supporting 16 global currencies with no markup on loaded currency. Includes discounts on roaming packs and TripAssist support. It has joiningfee 300, renewalfee 0, and is bestsuited for Shopping, International Spends. also it has welcome benefits None, and a starrating of 4.0 with reward type REWARD_POINTS

This is HDFC Bank Multicurrency Platinum ForexPlus Chip Card, from HDFC, with category FOREX which has a description like this Multicurrency card supporting 22 currencies with markup-free usage and additional benefits like Amazon vouchers and global concierge services. It has joiningfee 500, renewalfee 0, and is bestsuited for Travel, International Spends. also it has welcome benefits Fee waiver on 1st load of USD 1,000 or equivalent, and a starrating of 4.0 with reward type REWARD_POINTS

This is State Bank Multi-Currency Foreign Travel Card, from SBI, with category FOREX which has a description like this Lowest issuance fee card supporting 7 currencies. No markup on loaded currency, 3% fee on cross-currency transactions. It has joiningfee 100, renewalfee 0, and is bestsuited for Travel, International Spends. also it has welcome benefits None, and a starrating of 4.0 with reward type REWARD_POINTS

This is Scapia Federal Credit Card, from FEDERAL, with category DOMESTIC_LOUNGE which has a description like this Lifetime-free credit card offering complimentary domestic airport lounge access in India with minimal spend. Provides zero forex charges on international transactions and travel-focused benefits. It has joiningfee 0, renewalfee 0, and is bestsuited for Travel, Shopping. also it has welcome benefits None, and a starrating of 4.0 with reward type REWARD_POINTS

This is IDFC FIRST Wealth Credit Card, from IDFC, with category DOMESTIC_LOUNGE which has a description like this Premium lifetime-free card with travel, shopping, and lifestyle rewards. Offers 10X reward points, lounge access, spa/golf privileges, and insurance coverage. It has joiningfee 0, renewalfee 0, and is bestsuited for Movies, Travel, Shopping. also it has welcome benefits ₹500 vouchers from Uber, Amazon, Bigbasket on ₹5,000 spend in 30 days. 5% cashback up to ₹1,000 on first EMI transaction, and a starrating of 5.0 with reward type REWARD_POINTS

This is Axis Bank Olympus Credit Card, from AXIS, with category DOMESTIC_LOUNGE which has a description like this Premium lifestyle and travel card offering high reward rates, luxury hotel vouchers, unlimited lounge access, and concierge benefits. It has joiningfee 20000, renewalfee 20000, and is bestsuited for Movies, Travel, Shopping. also it has welcome benefits 2,500 EDGE Miles and hotel vouchers worth ₹10,000 (Taj/ITC), and a starrating of 5.0 with reward type REWARD_POINTS

This is Airtel Axis Bank Credit Card, from AXIS, with category CASHBACK which has a description like this Co-branded card ideal for Airtel users offering high cashback on utility and Airtel services via Airtel Thanks app. Modest fee with direct cashback redemption. It has joiningfee 500, renewalfee 500, and is bestsuited for Travel, Food, Utility Bill Payment. also it has welcome benefits Amazon Voucher Worth ₹500, and a starrating of 4.0 with reward type CASHBACK

This is HSBC Live+ Credit Card, from HSBC, with category CASHBACK which has a description like this Cashback card designed for daily grocery, dining, and food delivery spends with additional savings on movies and complimentary lounge access. It has joiningfee 999, renewalfee 999, and is bestsuited for Shopping, Food. also it has welcome benefits ₹1,000 Cashback on Spending ₹20,000 in the First 30 Days, and a starrating of 4.0 with reward type CASHBACK

This is Axis Bank Cashback Credit Card, from AXIS, with category CASHBACK which has a description like this Straightforward cashback card ideal for online shoppers, offering high rewards and low complexity with quick welcome bonus. It has joiningfee 1000, renewalfee 1000, and is bestsuited for Shopping. also it has welcome benefits 5,000 EDGE Reward Points on First Transaction Within 30 Days, and a starrating of 4.0 with reward type CASHBACK

This is SBI SimplySAVE UPI Rupay Credit Card, from SBI, with category RUPAY which has a description like this Beginner-friendly rewards card offering accelerated 10X reward points on daily purchases like groceries, movies, and department stores. Fee waiver on annual spend of ₹1L. It has joiningfee 499, renewalfee 499, and is bestsuited for Shopping. also it has welcome benefits 2,000 Reward Points on spending ₹2,000 in the first 60 days, and a starrating of 4.0 with reward type REWARD_POINTS

This is Tata Neu Plus HDFC Bank Credit Card, from HDFC, with category RUPAY which has a description like this Entry-level co-branded card earning NeuCoins on Tata brand spends and UPI payments through Tata Neu app. Includes airport lounge access. It has joiningfee 499, renewalfee 499, and is bestsuited for Shopping. also it has welcome benefits 499 NeuCoins, and a starrating of 4.0 with reward type NEUCOINS

This is IDFC HPCL FIRST Power Credit Card, from IDFC, with category RUPAY which has a description like this Fuel-focused credit card co-branded with HPCL. Offers cashback on first HPCL fuel spend, additional rewards, and EMI cashback benefits. It has joiningfee 199, renewalfee 199, and is bestsuited for Fuel. also it has welcome benefits ₹250 cashback on first HPCL fuel transaction and up to ₹1,000 cashback on first EMI transaction, and a starrating of 4.0 with reward type REWARD_POINTS

This is Times Black ICICI Bank Credit Card, from ICICI, with category INTERNATIONAL_LOUNGE which has a description like this Luxury lifestyle card with premium travel and shopping perks including unlimited lounge access, helicopter airport transfers, and vouchers worth ₹20,000. It has joiningfee 20000, renewalfee 20000, and is bestsuited for Travel | Shopping. also it has welcome benefits ₹10,000 EaseMyTrip Hotel Voucher, ₹10,000 Onevasco & More Visa Services, ₹3,000 Toni & Guy Voucher and Zomato Gold Membership, and a starrating of 5.0 with reward type REWARD_POINTS

This is IDFC First Bank Mayura Credit Card, from IDFC, with category INTERNATIONAL_LOUNGE which has a description like this Premium card with airport lounge access (including guest), zero forex fees, and 10X rewards on high spends including rent, education, and utilities. It has joiningfee 5999, renewalfee 5999, and is bestsuited for Movies | Travel | Shopping. also it has welcome benefits Maximum Cashback of ₹4,000 on Making Four Transactions of ₹1,000 or More, and a starrating of 5.0 with reward type REWARD_POINTS

This is Axis Bank SELECT Credit Card, from AXIS, with category INTERNATIONAL_LOUNGE which has a description like this Feature-rich card offering up to 20 reward points per ₹100 spent, dining discounts, lounge access, and welcome bonus worth ₹2,000. It has joiningfee 3000, renewalfee 3000, and is bestsuited for Travel | Shopping. also it has welcome benefits 10,000 EDGE Reward Points (Worth ₹2,000) on First Transaction, and a starrating of 4.0 with reward type REWARD_POINTS

This is IndianOil Axis Bank Premium Credit Card, from AXIS, with category FUEL which has a description like this Fuel-centric credit card offering 6X EDGE Miles at IndianOil outlets, plus grocery and other spend rewards. Includes lounge access and dining discounts. It has joiningfee 1000, renewalfee 1000, and is bestsuited for Fuel. also it has welcome benefits 500 EDGE Miles on the First Transaction Within 30 Days of Card Issuance, and a starrating of 4.0 with reward type REWARD_POINTS

This is IndianOil HDFC Bank Credit Card, from HDFC, with category FUEL which has a description like this Co-branded fuel credit card with up to 50L free fuel/year, accelerated points on IOCL spends, and annual fee waiver on milestone spending. It has joiningfee 500, renewalfee 500, and is bestsuited for Fuel. also it has welcome benefits N/A, and a starrating of 4.0 with reward type REWARD_POINTS

This is IDFC HPCL First Power Plus Credit Card, from IDFC, with category FUEL which has a description like this Advanced HPCL-IDFC fuel card with 6.5% fuel savings, lifestyle offers, grocery cashback, and welcome benefits worth ₹1,000. It has joiningfee 499, renewalfee 499, and is bestsuited for Fuel. also it has welcome benefits Up to ₹500 cashback on HPCL fuel txn & up to 5% cashback (₹1,000 cap) on first EMI txn, and a starrating of 5.0 with reward type REWARD_POINTS

This is Yes Bank Marquee Credit Card, from YES, with category INTERNATIONAL_TRAVEL which has a description like this Premium card with unlimited lounge access, movie ticket deals, low foreign markup, and high reward points on all spends. It has joiningfee 9999, renewalfee 4999, and is bestsuited for Movies. also it has welcome benefits Unlimited Lounge Access, BOGO movie offers, dining discounts, and a starrating of 5.0 with reward type REWARD_POINTS

This is Standard Chartered Ultimate Credit Card, from STANDARD_CHARTERED_BANK, with category INTERNATIONAL_TRAVEL which has a description like this Premium card offering international lounge access, strong rewards on global spends, and comprehensive travel insurance. It has joiningfee 5000, renewalfee 5000, and is bestsuited for Travel. also it has welcome benefits 6,000 reward points, complimentary Priority Pass membership, and a starrating of 5.0 with reward type REWARD_POINTS

This is Axis Bank Magnus Credit Card, from AXIS, with category INTERNATIONAL_TRAVEL which has a description like this High-end travel card with unlimited lounge access, decent rewards, and travel insurance benefits despite higher markup fees. It has joiningfee 12500, renewalfee 12500, and is bestsuited for Travel. also it has welcome benefits Unlimited Complimentary International Airport Lounge Access Via Priority Pass, and a starrating of 4.0 with reward type REWARD_POINTS

This is YES Bank POP CLUB Credit Card, from YES, with category FINTECH which has a description like this Zero-fee card offering lifestyle benefits and rewards. Ideal for online shoppers and lifestyle-focused users. It has joiningfee 0, renewalfee 0, and is bestsuited for Shopping. also it has welcome benefits ₹5,000 value including 500 POPcoins, Cleartrip ₹750 voucher, Cult Sport ₹500 voucher, Zomato Gold 3-month membership, and a starrating of 4.0 with reward type REWARD_POINTS

This is BOBCARD Uni GoldX Credit Card, from BOB, with category FINTECH which has a description like this Lifetime free card suitable for frequent shoppers. Straightforward reward program with minimal overhead. It has joiningfee 0, renewalfee 0, and is bestsuited for Shopping. also it has welcome benefits N/A, and a starrating of 4.0 with reward type REWARD_POINTS

This is YES Bank Anq Phi Credit Card, from YES, with category FINTECH which has a description like this Premium credit card tailored for high-end lifestyle needs. Expect exclusive benefits, although specifics are limited. It has joiningfee 0, renewalfee 0, and is bestsuited for Lifestyle. also it has welcome benefits N/A, and a starrating of 4.0 with reward type REWARD_POINTS
`