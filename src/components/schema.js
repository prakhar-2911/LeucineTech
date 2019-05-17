import * as yup from 'yup';

export default {

    validationSchema: yup.object().shape({
        analytical_method_id: yup.string().min(3, 'Min 3 characters').required('This is required'),
        target_residue_type: yup.string().required('This is required'),
        reason: yup.string().required('This is required'),
        api_lod: yup.string().notRequired().when(
            'target_residue_type',{
                is: (val) => val === ('api'),
                then: yup.string().required('This is required')
            }
        ),
        api_loq: yup.string().notRequired().when(
            'target_residue_type',{
                is: (val) => val === ('api'),
                then: yup.string().required('This is required')
            }
        ),

        //swab
        api_swab_method: yup.string().test('test1', 'This is required', function(value){
            const {target_residue_type,api_rinse_method, api_rinse_default_recovery } = this.parent;
            if(target_residue_type==='api' && api_rinse_method===undefined && api_rinse_default_recovery===undefined && value===undefined){
                return false;
            }
            return true;

        }),


        api_swab_solvent_name: yup.string().test('test2', 'This is required', function(value){
            const {target_residue_type,api_rinse_method, api_rinse_default_recovery } = this.parent;
            if(target_residue_type==='api' && api_rinse_method===undefined && api_rinse_default_recovery===undefined && value===undefined){
                return false;
            }
            return true;

        }),

        api_swab_solvent_quality: yup.string().test('test3', 'This is required', function(value){
            const {target_residue_type,api_rinse_method, api_rinse_default_recovery } = this.parent;
            if(target_residue_type==='api' && api_rinse_method===undefined && api_rinse_default_recovery===undefined && value===undefined){
                return false;
            }
            return true;

        }),
        
        api_swab_default_recovery: yup.string().test('test4', 'This is required', function(value){
            const {target_residue_type,api_rinse_method, api_rinse_default_recovery } = this.parent;
            if(target_residue_type==='api' && api_rinse_method===undefined && api_rinse_default_recovery===undefined && value===undefined){
                return false;
            }
            return true;

        }),
        
        
        //rinse
        //api

        api_rinse_method: yup.string().test('test5', 'This is required', function(value){
            const {target_residue_type,api_swab_method, api_swab_solvent_name, api_swab_solvent_quality, api_swab_default_recovery } = this.parent;
            if(target_residue_type==='api' && api_swab_method===undefined && !api_swab_solvent_name && !api_swab_solvent_quality && api_swab_default_recovery===undefined && value===undefined){
                return false;
            }
            return true;

        }),

        api_rinse_default_recovery: yup.string().test('test6', 'This is required', function(value){
            const {target_residue_type,api_swab_method, api_swab_solvent_name, api_swab_solvent_quality, api_swab_default_recovery } = this.parent;
            if(target_residue_type==='api' && api_swab_method===undefined && !api_swab_solvent_name && !api_swab_solvent_quality && api_swab_default_recovery===undefined && value===undefined){
                return false;
            }
            return true;


        }),
        
        // //cleaning agent

        cleaning_agent_lod: yup.string().notRequired().when(
            'target_residue_type',{
                is: (val) => val === ('cleaning-agent'),
                then: yup.string().required('This is required')
            }),
        
        cleaning_agent_loq: yup.string().notRequired().when(
            'target_residue_type',{
                is: (val) => val === ('cleaning-agent'),
                then: yup.string().required('This is required')
            }),
        
        
        //--swab
        cleaning_agent_swab_method: yup.string().test('test7', 'This is required', function(value){
            const {target_residue_type,cleaning_agent_rinse_method, cleaning_agent_rinse_default_recovery } = this.parent;
            if(target_residue_type==='cleaning-agent' && cleaning_agent_rinse_method===undefined && !cleaning_agent_rinse_default_recovery &&  value===undefined){
                return false;
            }
            return true;

        }),
        cleaning_agent_swab_solvent_name: yup.string().test('test8', 'This is required', function(value){
            const {target_residue_type,cleaning_agent_rinse_method, cleaning_agent_rinse_default_recovery } = this.parent;
            if(target_residue_type==='cleaning-agent' && cleaning_agent_rinse_method===undefined && !cleaning_agent_rinse_default_recovery &&  value===undefined){
                return false;
            }
            return true;

        }),
        cleaning_agent_swab_solvent_quality: yup.string().test('test9', 'This is required', function(value){
            const {target_residue_type,cleaning_agent_rinse_method, cleaning_agent_rinse_default_recovery } = this.parent;
            if(target_residue_type==='cleaning-agent' && cleaning_agent_rinse_method===undefined && !cleaning_agent_rinse_default_recovery &&  value===undefined){
                return false;
            }
            return true;

        }),
        cleaning_agent_swab_default_recovery: yup.string().test('test10', 'This is required', function(value){
            const {target_residue_type,cleaning_agent_rinse_method, cleaning_agent_rinse_default_recovery } = this.parent;
            if(target_residue_type==='cleaning-agent' && cleaning_agent_rinse_method===undefined && !cleaning_agent_rinse_default_recovery &&  value===undefined){
                return false;
            }
            return true;

        }),


        //-rinse
        cleaning_agent_rinse_method: yup.string().test('test11', 'This is required', function(value){
            const {target_residue_type,cleaning_agent_swab_method, cleaning_agent_swab_solvent_name, cleaning_agent_swab_solvent_quality, cleaning_agent_swab_default_recovery } = this.parent;
            if(target_residue_type==='cleaning-agent' && cleaning_agent_swab_method===undefined && cleaning_agent_swab_solvent_name && !cleaning_agent_swab_solvent_quality && !cleaning_agent_swab_default_recovery && value===undefined){
                return false;
            }
            return true;

        }),

        cleaning_agent_rinse_default_recovery: yup.string().test('test12', 'This is required', function(value){
            const {target_residue_type,cleaning_agent_swab_method, cleaning_agent_swab_solvent_name, cleaning_agent_swab_solvent_quality, cleaning_agent_swab_default_recovery } = this.parent;
            if(target_residue_type==='cleaning-agent' && cleaning_agent_swab_method===undefined && cleaning_agent_swab_solvent_name && !cleaning_agent_swab_solvent_quality && !cleaning_agent_swab_default_recovery && value===undefined){
                return false;
            }
            return true;

        }),


        // //bioburden

        bioburden_method: yup.string().notRequired().when(
            'target_residue_type',{
                is: (val) => val === ('bioburden'),
                then: yup.string().required('This is required')
            }),
        bioburden_limit: yup.string().notRequired().when(
            'target_residue_type' ,{
                is: (val) => val === ('bioburden'),
                then: yup.string().required('This is required')
            }),


        bioburden_tntc: yup.string().notRequired().when(
            ['target_residue_type', 'bioburden_limit'],{
                is: (target_residue_type, bioburden_limit) => target_residue_type === 'bioburden' && bioburden_limit==='yes',
                then: yup.string().required('This is required')
            },
            
            ),
        bioburden_tftc: yup.string().notRequired().when(
            ['target_residue_type', 'bioburden_limit'],{
                is: (target_residue_type, bioburden_limit) => target_residue_type === 'bioburden' && bioburden_limit==='yes',
                then: yup.string().required('This is required')
            }),

        //--swab
        bioburden_swab_recovery_percentage: yup.string().test('test13', 'This is required', function(value){
            const {target_residue_type,bioburden_rinse_recovery_percentage, bioburden_rinse_solvent_volume, bioburden_rinse_use_recovery } = this.parent;
            if(target_residue_type==='bioburden' && bioburden_rinse_recovery_percentage===undefined && !bioburden_rinse_solvent_volume && !bioburden_rinse_use_recovery && value===undefined){
                return false;
            }
            return true;

        }),

        bioburden_swab_use_recovery: yup.string().test('testAB', 'This is required', function(value){
            const {target_residue_type,bioburden_rinse_recovery_percentage, bioburden_rinse_solvent_volume, bioburden_rinse_use_recovery } = this.parent;
            if(target_residue_type==='bioburden' && bioburden_rinse_recovery_percentage===undefined && !bioburden_rinse_solvent_volume && !bioburden_rinse_use_recovery && value===undefined){
                return false;
            }
            return true;

        }),


        
        //--rinse
        bioburden_rinse_solvent_volume: yup.string().test('test14', 'This is required', function(value){
            const {target_residue_type, bioburden_swab_recovery_percentage, bioburden_swab_use_recovery} = this.parent;
            if(target_residue_type==='bioburden' && !bioburden_swab_use_recovery && bioburden_swab_recovery_percentage===undefined && value===undefined){
                return false;
            }
            return true;

        }),
        bioburden_rinse_use_recovery: yup.string().test('test15', 'This is required', function(value){
            const {target_residue_type, bioburden_swab_recovery_percentage, bioburden_swab_use_recovery} = this.parent;
            if(target_residue_type==='bioburden' && !bioburden_swab_use_recovery && bioburden_swab_recovery_percentage===undefined && value===undefined){
                return false;
            }
            return true;

        }),
        bioburden_rinse_recovery_percentage: yup.string().test('test16', 'This is required', function(value){
            const {target_residue_type, bioburden_swab_recovery_percentage, bioburden_swab_use_recovery} = this.parent;
            if(target_residue_type==='bioburden' && !bioburden_swab_use_recovery && bioburden_swab_recovery_percentage===undefined && value===undefined){
                return false;
            }
            return true;

        }),


        //endotoxin

        endotoxin_method: yup.string().notRequired().when(
            'target_residue_type',{
                is: (val) => val === ('endotoxin'),
                then: yup.string().required('This is required')
            }),
        endotoxin_limit: yup.string().notRequired().when(
            'target_residue_type',{
                is: (val) => val === ('endotoxin'),
                then: yup.string().required('This is required')
            }), 
        endotoxin_tntc: yup.string().notRequired().when(
            ['target_residue_type', 'endotoxin_limit'],{
                is: (target_residue_type, endotoxin_limit) => target_residue_type === 'endotoxin' && endotoxin_limit==='yes',
                then: yup.string().required('This is required')
            }),
        endotoxin_tftc: yup.string().notRequired().when(
            ['target_residue_type', 'endotoxin_limit'],{
                is: (target_residue_type, endotoxin_limit) => target_residue_type === 'endotoxin' && endotoxin_limit==='yes',
                then: yup.string().required('This is required')
            }),

        //--swab 
        
        endotoxin_swab_use_recovery: yup.string().test('test17', 'This is required', function(value){
            const {target_residue_type, endotoxin_rinse_solvent_volume, endotoxin_rinse_use_recovery, endotoxin_rinse_recovery_percentage} = this.parent;
            if(target_residue_type==='endotoxin' && endotoxin_rinse_solvent_volume===undefined && !endotoxin_rinse_use_recovery && !endotoxin_rinse_recovery_percentage && value===undefined){
                return false;
            }
            return true;

        }),
        endotoxin_swab_recovery_percentage: yup.string().test('test18', 'This is required', function(value){
            const {target_residue_type, endotoxin_rinse_solvent_volume, endotoxin_rinse_use_recovery, endotoxin_rinse_recovery_percentage} = this.parent;
            if(target_residue_type==='endotoxin' && endotoxin_rinse_solvent_volume===undefined && !endotoxin_rinse_use_recovery && !endotoxin_rinse_recovery_percentage && value===undefined){
                return false;
            }
            return true;

        }),


        //--rinse
        endotoxin_rinse_solvent_volume: yup.string().test('test19', 'This is required', function(value){
            const {target_residue_type, endotoxin_swab_use_recovery, endotoxin_swab_recovery_percentage} = this.parent;
            if(target_residue_type==='endotoxin' && endotoxin_swab_use_recovery===undefined && !endotoxin_swab_recovery_percentage && value===undefined){
                return false;
            }
            return true;

        }),
        endotoxin_rinse_use_recovery: yup.string().test('test20', 'This is required', function(value){
            const {target_residue_type, endotoxin_swab_use_recovery, endotoxin_swab_recovery_percentage} = this.parent;
            if(target_residue_type==='endotoxin' && endotoxin_swab_use_recovery===undefined && !endotoxin_swab_recovery_percentage && value===undefined){
                return false;
            }
            return true;

        }),
        endotoxin_rinse_recovery_percentage: yup.string().test('test21', 'This is required', function(value){
            const {target_residue_type, endotoxin_swab_use_recovery, endotoxin_swab_recovery_percentage} = this.parent;
            if(target_residue_type==='endotoxin' && endotoxin_swab_use_recovery===undefined && !endotoxin_swab_recovery_percentage && value===undefined){
                return false;
            }
            return true;

        })
    })
}

