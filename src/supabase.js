import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://jtnyprwuemfdboppbnuk.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0bnlwcnd1ZW1mZGJvcHBibnVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE4MzQ0NTksImV4cCI6MjAzNzQxMDQ1OX0.FxrgVwVvD6UVExTQcLNh_QzR9JTpVXMZ04C5Mya1zkA";
const supabase = createClient(supabaseUrl, supabaseKey);


export default supabase;