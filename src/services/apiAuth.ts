import supabase from "./supabase";

async function supabaseLogin({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

async function supabaseSignUp({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) throw new Error(error.message);

  return data;
}

async function supabaseLogout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}

async function supabaseGetUser() {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) return null;

  const { data, error } = await supabase.auth.getUser();
  if (error) throw new Error(error.message);

  return data?.user || null;
}

export { supabaseLogin, supabaseSignUp, supabaseLogout, supabaseGetUser };
