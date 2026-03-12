# AI Closet Stylist Agent
## Product Requirements Document (PRD)

**Version:** 1.0  
**Author:** Sage Yan  
**Last Updated:** 2026

## 1. Product Overview

### 1.1 Background
Many users own numerous clothing items but still struggle to decide what to wear daily. Most fashion recommendation products focus on suggesting new products instead of making better use of the user’s existing wardrobe.

AI Closet Stylist Agent is an AI-powered personal styling system that generates daily outfit recommendations based on the user’s own wardrobe, while incorporating weather, style preference, occasion context, behavioral feedback, and shopping suggestions for missing pieces.

### 1.2 Product Vision
Build a personalized outfit recommendation system that:
- helps users decide what to wear today,
- maximizes utilization of existing wardrobe items,
- learns continuously from feedback,
- and bridges outfit recommendation with actionable shopping guidance.

## 2. Product Goals

### 2.1 Primary Goals
- Help users decide **what to wear today**
- Maximize utilization of wardrobe items already owned
- Provide personalized outfit suggestions
- Identify missing pieces to improve style consistency
- Improve over time through user feedback

### 2.2 Secondary Goals
- Provide style inspiration via external lookbooks
- Generate shopping links for missing items
- Support future ranking experiments and A/B testing
- Build a production-style applied AI project suitable for portfolio and hiring

## 3. Target Users

### 3.1 Primary Users
Users who:
- have a personal wardrobe but struggle with daily outfit selection,
- want personalized styling assistance,
- and are comfortable using AI-based recommendations.

### 3.2 Secondary Users
- Fashion enthusiasts
- Capsule wardrobe users
- Users who want to optimize shopping decisions
- Users who want to reduce decision fatigue

## 4. User Problems
- “I have clothes, but I don’t know what to wear today.”
- “I repeat the same outfits too often.”
- “I buy things without knowing whether they fit my wardrobe.”
- “I want recommendations based on my own style, not generic trends.”
- “I need something that considers weather, occasion, and preference together.”

## 5. Core Features

### 5.1 Closet Ingestion
Users upload clothing images to create a digital wardrobe.

#### Functional Requirements
- Support single image upload
- Support batch upload
- Store images in object storage
- Run image parsing and tagging after upload
- Extract:
  - category
  - colors
  - style tags
  - occasion tags
  - warmth level
- Save structured metadata into `closet_items`
- Log upload behavior into `events_raw`

#### Future Enhancements
- Background removal
- Duplicate image detection
- Manual correction of labels
- Auto-cropping and garment segmentation

### 5.2 Preference Modeling
Construct user preferences from both explicit settings and implicit behavior.

#### Explicit Preference Inputs
- preferred styles
- disliked colors
- warmth preference
- occasion preference

#### Implicit Signals
- liked outfits
- disliked outfits
- skipped outfits
- clicked alternatives
- clicked shopping links

#### Data Storage
- `users.profile`
- `user_preferences`
- `feedback`
- `events_raw`
- `recommendation_exposures`

### 5.3 Outfit Retrieval
Generate outfit candidates from the user's wardrobe and retrieve reference inspirations from external curated outfits.

#### Retrieval Logic
- Filter by weather
- Filter by occasion
- Filter by user preference
- Avoid recently overused items
- Ensure category coverage:
  - top
  - bottom
  - shoes
  - optional outerwear / accessories

#### External Inspiration Retrieval
Use:
- `outfit_images`
- `outfit_image_embeddings`
- `outfit_style_embeddings`
- `outfit_text_embeddings`

to retrieve inspiring outfit examples for:
- style reference,
- missing item detection,
- and explanation generation.

### 5.4 Outfit Ranking
Score candidate outfits and return ranked recommendations.

#### Initial Ranking Formula
```python
score = (
    0.28 * style_match +
    0.22 * weather_fit +
    0.18 * occasion_fit +
    0.12 * color_harmony +
    0.10 * user_preference +
    0.06 * novelty +
    0.04 * closet_utilization
)
```

#### Output
- Top 1 primary recommendation
- Top 2-3 alternatives
- Recommendation context and served outfits logged to `recommendation_exposures`

### 5.5 Shopping Suggestion
Identify missing wardrobe pieces and generate actionable purchase suggestions.

#### Output Includes
- missing item type
- recommendation reason
- search keyword
- store search links

#### MVP Store Targets
- Amazon
- ASOS
- Zara
- Taobao (optional for CN market)

### 5.6 Feedback Loop
Collect explicit and implicit feedback to improve future recommendations.

#### Explicit Actions
- like
- dislike
- save

#### Implicit Actions
- skip
- click alternative
- click shopping link
- revisit recommendation history

#### Storage
- explicit signals in `feedback`
- behavioral logs in `events_raw`

## 6. End-to-End User Flow
1. User signs up / logs in
2. User uploads clothing items
3. System parses images and stores metadata
4. User sets initial preferences
5. User requests today’s recommendation
6. System builds context:
   - weather
   - occasion
   - preference
   - history
7. System retrieves candidate items and outfit inspirations
8. System ranks outfits
9. System returns:
   - primary outfit
   - alternatives
   - explanation
   - shopping suggestions
10. User interacts with results
11. Feedback updates personalization and training data

## 7. Functional Requirements

### 7.1 Recommendation Generation
- The system must generate at least 1 primary outfit recommendation
- The system should generate 2-3 alternative outfits
- The system should explain why the outfit is recommended
- The system should identify missing pieces if the user’s wardrobe is insufficient

### 7.2 Logging and Experimentation
- Every recommendation request must generate a unique `request_id`
- Exposures must store:
  - context
  - candidate pool
  - served outfits
  - model metadata
  - latency metrics

### 7.3 Feedback Handling
- Every explicit feedback event should link to `request_id`
- Feedback should support signal and reason fields
- Feedback should be usable for both preference update and model training

## 8. Non-Functional Requirements
- Recommendation response should feel interactive and near real-time
- Image upload should be reliable for batch operations
- User data must be isolated by `user_id`
- Recommendation logging must support offline analysis
- Architecture must support future ranker retraining and A/B testing

## 9. Technical Scope

### 9.1 Frontend
- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui

### 9.2 Backend
- FastAPI
- Python service layer
- REST APIs

### 9.3 Data Layer
- PostgreSQL
- pgvector
- Object storage

### 9.4 AI Layer
- CLIP / FashionCLIP
- Sentence Transformers
- LLM for explanation and shopping suggestions
- LightGBM / XGBoost for ranking (future phase)

## 10. Success Metrics

### Product Metrics
- recommendation click-through rate
- outfit like rate
- alternative click rate
- shopping link click rate
- daily active users / return users

### Model Metrics
- NDCG@K
- AUC
- acceptance rate
- skip rate
- diversity score

## 11. Risks and Mitigations

### Risk: inaccurate clothing recognition
Mitigation:
- editable item metadata
- simple baseline tags first
- background preprocessing

### Risk: cold start users
Mitigation:
- onboarding preference form
- rule-based ranking before ML ranker

### Risk: limited wardrobe size
Mitigation:
- retrieve inspiration looks
- provide missing-piece shopping guidance

### Risk: subjective fashion preference
Mitigation:
- emphasize feedback loop
- blend explicit and implicit signals

## 12. MVP Scope

### Included in MVP
- wardrobe upload
- outfit tagging
- user preference setup
- daily outfit recommendation
- 2-3 alternative outfits
- shopping link generation
- feedback collection
- exposure logging

### Excluded from MVP
- social sharing
- advanced chatbot assistant
- affiliate monetization
- diffusion-based try-on generation

## 13. Future Roadmap
- calendar-aware outfit recommendation
- browser / email daily push
- dynamic ranker training pipeline
- style analytics dashboard
- wardrobe utilization insights
- smart shopping assistant with product APIs
