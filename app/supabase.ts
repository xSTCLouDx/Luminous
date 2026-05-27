import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

const supabaseUrl = 'sua url';
const supabaseKey = 'sua key';

export const supabase = createClient(supabaseUrl, supabaseKey);
