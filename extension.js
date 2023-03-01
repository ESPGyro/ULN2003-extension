({
    name: "步進馬達", // Category Name
    description: "Set angle to stepper motor",
    author: "mason",
    category: "Device Control",
    version: "1.0.0",
    icon: "/static/uln2003.png", // Category icon
    color: "#0271D9", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        {
            xml: `
                <block type="uln2003_step">
                    <value name="pin1">
                        <shadow type="math_number">
                            <field name="NUM">26</field>
                        </shadow>
                    </value>
                    <value name="pin2">
                        <shadow type="math_number">
                            <field name="NUM">25</field>
                        </shadow>
                    </value>
                    <value name="pin3">
                        <shadow type="math_number">
                            <field name="NUM">33</field>
                        </shadow>
                    </value>
                    <value name="pin4">
                        <shadow type="math_number">
                            <field name="NUM">32</field>
                        </shadow>
                    </value>
                    <value name="step">
                        <shadow type="math_number">
                            <field name="NUM">512</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="uln2003_angle">
                    <value name="pin1">
                        <shadow type="math_number">
                            <field name="NUM">26</field>
                        </shadow>
                    </value>
                    <value name="pin2">
                        <shadow type="math_number">
                            <field name="NUM">25</field>
                        </shadow>
                    </value>
                    <value name="pin3">
                        <shadow type="math_number">
                            <field name="NUM">33</field>
                        </shadow>
                    </value>
                    <value name="pin4">
                        <shadow type="math_number">
                            <field name="NUM">32</field>
                        </shadow>
                    </value>
                    <value name="angle">
                        <shadow type="math_number">
                            <field name="NUM">180</field>
                        </shadow>
                    </value>
                </block>
            `
        },
    ]
});
