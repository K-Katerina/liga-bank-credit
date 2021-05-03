export const Actions = {
    GET_DATA: 'GET_DATA',
    CHANGE_VISIBILITY_MENU: 'CHANGE_VISIBILITY_MENU',
    CHANGE_VISIBILITY_FORM_LOGIN: 'CHANGE_VISIBILITY_FORM_LOGIN',
    CHANGE_TARGET: 'CHANGE_TARGET',
    CHANGE_COST: 'CHANGE_COST',
    CHANGE_FEE: 'CHANGE_FEE',
    CHANGE_PERIOD: 'CHANGE_PERIOD',
    CHANGE_USE_CAPITAL: 'CHANGE_USE_CAPITAL',
    CHANGE_USE_INSURANCE: 'CHANGE_USE_INSURANCE',
    CHANGE_USE_COMPREHENSIVE_COVER: 'CHANGE_USE_COMPREHENSIVE_COVER',
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT'
};

export const Tabs = {
    DEPOSITS: 'DEPOSITS',
    CREDITS: 'CREDITS',
    INSURANCE: 'INSURANCE',
    ONLINE_SERVICES: 'ONLINE_SERVICES'
};

export const TabNames = {
    DEPOSITS: 'Вклады',
    CREDITS: 'Кредиты',
    INSURANCE: 'Страхование',
    ONLINE_SERVICES: 'Онлайн-сервисы'
};

export const CreditTarget = {
    MORTGAGE: 'MORTGAGE',
    AUTO_CREDIT: 'AUTO_CREDIT'
};

export const CreditTargetNames = {
    MORTGAGE: 'Ипотечное кредитование',
    AUTO_CREDIT: 'Автомобильное кредитование'
};

export const PARENT_CAPITAL = 470_000;

export const MortgageConsts = {
    MIN_COST: 1_200_000,
    MAX_COST: 25_000_000,
    STEP_COST: 100_000,
    MIN_FEE: 10,    // %
    MAX_FEE: 100,   // %
    STEP_FEE: 5,    // %
    PART_PAYMENT_OF_INCOME: 45, // мин % части ежемесячного платежа от дохода
    MIN_CREDIT: 500_000,
    MIN_PERIOD: 5,
    MAX_PERIOD: 30,
    MIN_INTEREST_RATE: 8.5,
    MAX_INTEREST_RATE: 9.4,

// - Первоначальный взнос до 15%, процентная ставка - 9,40%
// - Первоначальный взнос 15% и выше, процентная ставка - 8,50%
};

export const AutoCreditConsts = {
    MIN_COST: 500_000,
    MAX_COST: 5_000_000,
    STEP_COST: 50_000,
    MIN_FEE: 20,    // %
    MAX_FEE: 100,   // %
    STEP_FEE: 5,    // %
    PART_PAYMENT_OF_INCOME: 45, // мин % части ежемесячного платежа от дохода
    MIN_CREDIT: 200_000,
    MIN_PERIOD: 1,
    MAX_PERIOD: 5,
    MIN_INTEREST_RATE: 8.5,
    MAX_INTEREST_RATE: 9.4,
    MIN_INTEREST_RATE_ADD: 8.5,
    MAX_INTEREST_RATE_ALL_ADD: 3.5,

// - До 2 000 000 рублей - 16%
// - 2 000 000 рублей и выше - 15%
// - При оформление КАСКО или страхования жизни - 8,5%
// - При оформлении КАСКО и страхования жизни - 3,5%
};

export const ESC_CODE = 27;
