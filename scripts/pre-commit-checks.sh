#!/bin/bash

echo "🔍 Running ESLint..."
npm run lint
if [ $? -ne 0 ]; then
  echo "❌ ESLint failed!"
  exit 1
fi

echo "🎨 Checking code formatting with Prettier..."
npm run format
if [ $? -ne 0 ]; then
  echo "❌ Prettier check failed!"
  exit 1
fi

echo "📐 Running TypeScript type-checking..."
npm run type-check
if [ $? -ne 0 ]; then
  echo "❌ TypeScript type-checking failed!"
  exit 1
fi

echo "✅ Running tests with Jest..."
npm run test
if [ $? -eq 0 ]; then
  echo "⚠️ No tests found. Skipping."
elif [ $? -ne 0 ]; then
  echo "❌ Tests failed!"
  exit 1
fi

echo "🎉 All checks passed! Committing..."
