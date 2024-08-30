import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://innuapfheglmajpygkii.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlubnVhcGZoZWdsbWFqcHlna2lpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ1OTU5NzgsImV4cCI6MjA0MDE3MTk3OH0.RYDBv5X9ttuARVvaOst4E6E-atvazft-EIbqI7UG2Wg";
const supabase = createClient(supabaseUrl, supabaseKey);
    

export default supabase;