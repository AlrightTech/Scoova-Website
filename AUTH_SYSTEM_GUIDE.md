# Authentication & Subscription System Guide

## User States

System mein 4 user states hain:

### 1. **Guest** (Not Logged In)
- `isGuest = true`
- `isLoggedIn = false`
- `isSubscribed = false`
- Kya dikhega:
  - Subscription gates
  - Blurred content
  - Login prompts

### 2. **Logged In (Non-Subscriber)**
- `isLoggedIn = true`
- `isSubscribed = false`
- `isNonSubscriber = true`
- Kya dikhega:
  - Subscription gates
  - Blurred content
  - Subscribe Now buttons

### 3. **Subscriber**
- `isLoggedIn = true`
- `isSubscribed = true`
- Kya dikhega:
  - Full content access
  - No blur
  - All features unlocked

### 4. **Just Logged In**
- Same as "Logged In (Non-Subscriber)"
- User ne abhi login kiya hai but subscribe nahi kiya

## How to Use in Components

```jsx
import { useAuth } from '@/contexts/AuthContext'

export default function MyComponent() {
  const { 
    user,              // User object or null
    subscription,      // Subscription object or null
    isLoading,         // Loading state
    isGuest,           // true if not logged in
    isLoggedIn,        // true if logged in
    isSubscribed,      // true if subscribed
    isNonSubscriber,   // true if logged in but not subscribed
    login,             // Function to login
    logout,            // Function to logout
    subscribe          // Function to subscribe
  } = useAuth()

  // Example usage
  if (isGuest) {
    return <LoginPrompt />
  }
  
  if (isNonSubscriber) {
    return <SubscriptionGate />
  }
  
  if (isSubscribed) {
    return <FullContent />
  }
}
```

## Pages

### Sign In: `/signin`
- Login page
- Logo + "Get Started" heading
- No footer

### Sign Up: `/signup`
- Registration page
- Logo + "Create Account" heading
- No footer

## Components Updated

1. **RecentlyReviewedSchoolsGate** - Uses `isSubscribed`
2. **SchoolInsights** - Uses `isSubscribed` for blur
3. **CompareSchoolsInput** - Uses `isSubscribed` for statistics blur
4. **SubscriptionGate** - Uses `isLoggedIn`
5. **SchoolInsightsSubscriptionGate** - Uses `isLoggedIn`
6. **PricingCard** - Uses `subscribe()` function

## Flow

1. **Guest** → Click "Sign In" → Login → **Logged In (Non-Subscriber)**
2. **Logged In (Non-Subscriber)** → Click "Subscribe" → Subscribe → **Subscriber**
3. **Subscriber** → Full access to all content

## Testing

1. Clear localStorage to test as Guest
2. Login to test as Logged In
3. Subscribe to test as Subscriber

