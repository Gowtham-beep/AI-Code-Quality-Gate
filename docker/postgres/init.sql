-- PostgreSQL initialization script
-- This runs once when the Docker container is first created.

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE EXTENSION IF NOT EXISTS "pg_trgm"; -- for fuzzy text search later

-- Useful for performance monitoring (optional)
-- CREATE EXTENSION IF NOT EXISTS "pg_stat_statements";
