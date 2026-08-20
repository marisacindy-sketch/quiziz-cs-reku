create extension if not exists pgcrypto;

create table if not exists trainees (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  name text not null,
  position text default '',
  is_active boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists quiz_settings (
  id text primary key default 'weekly',
  active_product text not null default 'Perpetuals',
  open_day int not null default 5,
  open_time text not null default '13:00',
  close_day int not null default 0,
  close_time text not null default '23:59',
  duration_minutes int not null default 35,
  updated_at timestamptz default now()
);

create table if not exists questions (
  id text primary key,
  product text not null,
  number int not null,
  type text default 'Concept essay',
  points int default 10,
  question text not null,
  answer_key text default '',
  updated_at timestamptz default now()
);

create table if not exists submissions (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  name text default '',
  position text default '',
  product text not null,
  quiz_period text not null,
  started_at timestamptz,
  submitted_at timestamptz default now(),
  submit_reason text default 'manual',
  duration_seconds int default 0,
  answered int default 0,
  total_questions int default 10,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  unique(email, product, quiz_period)
);

create table if not exists answers (
  id uuid primary key default gen_random_uuid(),
  submission_id uuid references submissions(id) on delete cascade,
  question_id text references questions(id),
  answer text default '',
  created_at timestamptz default now()
);

alter table trainees enable row level security;
alter table quiz_settings enable row level security;
alter table questions enable row level security;
alter table submissions enable row level security;
alter table answers enable row level security;

drop policy if exists "quiziz trainees read" on trainees;
drop policy if exists "quiziz trainees write" on trainees;
drop policy if exists "quiziz settings read" on quiz_settings;
drop policy if exists "quiziz settings write" on quiz_settings;
drop policy if exists "quiziz questions read" on questions;
drop policy if exists "quiziz questions write" on questions;
drop policy if exists "quiziz submissions read" on submissions;
drop policy if exists "quiziz submissions insert" on submissions;
drop policy if exists "quiziz submissions update" on submissions;
drop policy if exists "quiziz answers read" on answers;
drop policy if exists "quiziz answers insert" on answers;
drop policy if exists "quiziz answers update" on answers;
drop policy if exists "quiziz answers delete" on answers;

create policy "quiziz trainees read" on trainees for select using (true);
create policy "quiziz trainees write" on trainees for all using (true) with check (true);

create policy "quiziz settings read" on quiz_settings for select using (true);
create policy "quiziz settings write" on quiz_settings for all using (true) with check (true);

create policy "quiziz questions read" on questions for select using (true);
create policy "quiziz questions write" on questions for all using (true) with check (true);

create policy "quiziz submissions read" on submissions for select using (true);
create policy "quiziz submissions insert" on submissions for insert with check (true);
create policy "quiziz submissions update" on submissions for update using (true) with check (true);

create policy "quiziz answers read" on answers for select using (true);
create policy "quiziz answers insert" on answers for insert with check (true);
create policy "quiziz answers update" on answers for update using (true) with check (true);
create policy "quiziz answers delete" on answers for delete using (true);

insert into quiz_settings (id, active_product, open_day, open_time, close_day, close_time, duration_minutes)
values ('weekly', 'Perpetuals', 5, '13:00', 0, '23:59', 35)
on conflict (id) do update set
  active_product = excluded.active_product,
  open_day = excluded.open_day,
  open_time = excluded.open_time,
  close_day = excluded.close_day,
  close_time = excluded.close_time,
  duration_minutes = excluded.duration_minutes,
  updated_at = now();
