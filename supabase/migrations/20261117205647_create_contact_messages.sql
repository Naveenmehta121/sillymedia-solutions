/*
# Create contact_messages table (single-tenant, no auth)

1. New Tables
- `contact_messages`
  - `id` (uuid, primary key, auto-generated)
  - `name` (text, not null) - visitor's name from the contact form
  - `email` (text, not null) - visitor's email address
  - `message` (text, not null) - the message body
  - `created_at` (timestamp, defaults to now)

2. Security
- Enable RLS on `contact_messages`.
- Grant INSERT to `anon` + `authenticated` so the public contact form can save messages.
- No SELECT grant: visitors can only submit, never read other visitors' messages.
- Allow anon + authenticated INSERT only because this is a public, no-login contact form.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

GRANT INSERT (name, email, message) ON contact_messages TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages"
ON contact_messages FOR INSERT
TO anon, authenticated
WITH CHECK (true);
