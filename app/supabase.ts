import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

const supabaseUrl = 'https://yllallpwsyezuqicpzqb.supabase.co';
const supabaseKey = 'sb_publishable_g7ulHnjlXsOA-NzQcTv0Qg__CH1HJdC';

export const supabase = createClient(supabaseUrl, supabaseKey);