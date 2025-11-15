import { supabase } from '../lib/supabaseClient';

const table = 'crewmates';

export async function fetchCrewmates() {
    const { data, error } = await supabase
        .from(table)
        .select('*')
        .order('created_at', { ascending: false });
    if (error) throw error;
    return data;
}

export async function fetchCrewmateById(id) {
    const { data, error } = await supabase.from(table).select('*').eq('id', id).single();
    if (error) throw error;
    return data;
}

export async function createCrewmate(payload) {
    const { data, error } = await supabase.from(table).insert(payload).select().single();
    if (error) throw error;
    return data;
}

export async function updateCrewmate(id, payload) {
    const { data, error } = await supabase
        .from(table)
        .update(payload)
        .eq('id', id)
        .select()
        .single();
    if (error) throw error;
    return data;
}

export async function deleteCrewmate(id) {
    const { error } = await supabase.from(table).delete().eq('id', id);
    if (error) throw error;
}